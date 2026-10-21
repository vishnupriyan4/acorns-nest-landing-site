#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# convert-media.sh
#
# Converts every public/screenshots/*.gif into:
#   • .mp4   (H.264, universal)
#   • .webm  (VP9, ~30 % smaller than MP4 — Chrome/Firefox prefer it)
#   • -poster.jpg (first frame, for <video poster="...">)
#
# Why this exists
#   The Lighthouse audit flagged the 7 hero GIFs as ~48 MB total. GIFs are
#   a terrible format for screen-recordings: no compression, no key frames,
#   no audio-strip. A single 10 MB GIF typically compresses to under 500 KB
#   as H.264 MP4 with identical visual quality. On mobile that is the
#   difference between a 115 s LCP (today) and a sub-3 s LCP (target).
#
# Requirements
#   ffmpeg. Install with:
#     brew install ffmpeg
#
# Usage
#   bash scripts/convert-media.sh
#
# The <MediaPlayer> component (src/components/ui/product-screenshot.tsx)
# will automatically prefer the generated .webm/.mp4 over the .gif.
# Nothing to re-wire in code. You can delete the original GIFs afterwards.
# ---------------------------------------------------------------------------

set -euo pipefail

SCREENSHOTS_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/screenshots"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "✖ ffmpeg not found. Install it with: brew install ffmpeg" >&2
  exit 1
fi

if [[ ! -d "$SCREENSHOTS_DIR" ]]; then
  echo "✖ Not a screenshots directory: $SCREENSHOTS_DIR" >&2
  exit 1
fi

shopt -s nullglob
gifs=( "$SCREENSHOTS_DIR"/*.gif )

if (( ${#gifs[@]} == 0 )); then
  echo "No .gif files to convert in $SCREENSHOTS_DIR"
  exit 0
fi

echo "Found ${#gifs[@]} GIF(s) to convert in:"
echo "  $SCREENSHOTS_DIR"
echo

for gif in "${gifs[@]}"; do
  stem="${gif%.gif}"
  base="$(basename "$stem")"
  mp4="$stem.mp4"
  webm="$stem.webm"
  poster="$stem-poster.jpg"

  echo "► $base.gif"

  # H.264 MP4 — universal, hardware-accelerated on every device.
  # yuv420p + even dims for Safari. CRF 28 is a good balance for screen
  # recordings; lower = higher quality (23 is lossless-ish, 32 is small).
  ffmpeg -y -hide_banner -loglevel error -i "$gif" \
    -movflags +faststart \
    -pix_fmt yuv420p \
    -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2,fps=24" \
    -c:v libx264 -crf 28 -preset slow -an \
    "$mp4"

  # VP9 WebM — ~30 % smaller than MP4, Chrome/Firefox prefer it.
  # Skip if libvpx-vp9 isn't available in your ffmpeg build. If the
  # encoder is present but fails for any reason, delete the partial
  # output so it doesn't ship as a 0-byte file (browsers would try the
  # empty <source> and waste a request before falling back to MP4).
  if ffmpeg -hide_banner -encoders 2>&1 | grep -q libvpx-vp9; then
    if ffmpeg -y -hide_banner -loglevel error -i "$gif" \
         -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -an \
         -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2,fps=24" \
         "$webm"; then
      :
    else
      echo "  (webm encode failed; removing partial output and continuing with MP4 only)"
      rm -f "$webm"
    fi
  else
    echo "  (skipping webm — libvpx-vp9 not in ffmpeg; MP4 is enough)"
  fi

  # First-frame poster so the <video> renders instantly without downloading
  # the stream (preload="none" means no video bytes until play).
  ffmpeg -y -hide_banner -loglevel error -i "$gif" \
    -vframes 1 -q:v 3 "$poster"

  # Report savings.
  gif_size=$(wc -c < "$gif")
  mp4_size=$(wc -c < "$mp4")
  pct=$(awk -v g="$gif_size" -v m="$mp4_size" 'BEGIN{printf "%.1f", (1 - m/g) * 100}')
  printf "  gif=%s  →  mp4=%s  (−%s%%)\n" \
    "$(numfmt --to=iec --suffix=B "$gif_size")" \
    "$(numfmt --to=iec --suffix=B "$mp4_size")" \
    "$pct"
done

echo
echo "✓ Done. You can safely delete the .gif files after verifying the site."
echo "  rm $SCREENSHOTS_DIR/*.gif"
