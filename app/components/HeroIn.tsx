import type { ReactNode } from "react";

/** The hero's entrance on first paint: a short rise and fade in CSS (.hero-in), still under reduced motion. */
export function HeroIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`hero-in${className ? ` ${className}` : ""}`} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
