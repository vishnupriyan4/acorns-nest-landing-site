type TestimonialProps = {
  /** Exact approved text, without surrounding quote marks. */
  quote: string;
  role: "Director" | "Educator";
  organization: string;
  /** compact: homepage teaser card. */
  variant?: "default" | "compact";
};

/**
 * Attributed quote. Role plus centre only: no names, photos or ratings, and
 * no Review schema.
 */
export function Testimonial({
  quote,
  role,
  organization,
  variant = "default",
}: TestimonialProps) {
  const compact = variant === "compact";

  return (
    <figure
      className={`relative rounded-2xl border border-border border-l-4 border-l-primary bg-background ${
        compact ? "p-6 shadow-lg sm:p-8" : "p-6 shadow-sm sm:p-7"
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-1 select-none font-brand text-7xl leading-none text-primary/15"
      >
        &ldquo;
      </span>
      <blockquote>
        <p className="relative text-base font-medium leading-7 text-ink sm:text-lg sm:leading-8">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        <span className="font-semibold text-primary">{role}</span>,{" "}
        <cite className="not-italic">{organization}</cite>
      </figcaption>
    </figure>
  );
}
