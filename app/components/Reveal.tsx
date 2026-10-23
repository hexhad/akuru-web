import type { ReactNode } from "react";

/**
 * Rises into place as it scrolls into view, with CSS scroll-driven animation (see .reveal in globals.css).
 * No JavaScript: browsers without animation-timeline, and reduced motion, simply show the content.
 */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`reveal${className ? ` ${className}` : ""}`} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
