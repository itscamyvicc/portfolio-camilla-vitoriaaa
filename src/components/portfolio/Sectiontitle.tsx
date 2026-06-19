// Reusable Persona 5 styled section title with skewed red banner.
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col items-start gap-3">
      {eyebrow && (
        <span className="p5-tag">{eyebrow}</span>
      )}
      <h2 className="p5-title text-3xl sm:text-4xl md:text-5xl">{children}</h2>
    </div>
  );
}