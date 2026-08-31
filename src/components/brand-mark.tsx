import Image from "next/image";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  withWordmark?: boolean;
  invert?: boolean;
};

const BOX = {
  sm: { box: "size-9", type: "text-base" },
  md: { box: "size-11", type: "text-lg" },
  lg: { box: "size-14", type: "text-2xl" },
} as const;

export function NestGlyph({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={112}
      height={140}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export function BrandMark({
  size = "md",
  withWordmark = true,
  invert = false,
}: BrandMarkProps) {
  const s = BOX[size];

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`relative ${s.box} overflow-hidden rounded-xl bg-cream shadow-sm ring-1 ring-cream-deep/70`}
      >
        <NestGlyph className="h-full w-full p-0.5" />
      </span>
      {withWordmark ? (
        <span
          className={`font-brand tracking-tight ${s.type} ${
            invert ? "text-white" : "text-primary"
          }`}
        >
          Acorns Nest
        </span>
      ) : (
        <span className="sr-only">Acorns Nest</span>
      )}
    </span>
  );
}
