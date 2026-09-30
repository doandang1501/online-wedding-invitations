"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Adds the `is-visible` class to an element when it scrolls into view.
 * Works with the `.reveal` CSS helper. No-op for users who prefer reduced motion.
 */
export function useReveal<T extends HTMLElement>(options?: UseRevealOptions): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return ref;
}

/** A simple wrapper that reveals its children on scroll. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "figure" | "span" | "p";
}) {
  const ref = useReveal<HTMLDivElement>();
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
