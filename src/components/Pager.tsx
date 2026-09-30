"use client";

import { useEffect, useRef } from "react";

/**
 * Book-style paging: one section = one viewport. A single wheel tick,
 * touch swipe, or arrow key advances exactly one page (with a cooldown so
 * a flick can't skip multiple pages). Respects prefers-reduced-motion.
 */
export default function Pager({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const lockRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const pages = Array.from(container.children) as HTMLElement[];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const goTo = (i: number) => {
      const next = Math.max(0, Math.min(pages.length - 1, i));
      indexRef.current = next;
      pages[next].scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    };

    const advance = (dir: 1 | -1) => {
      const now = Date.now();
      if (now - lockRef.current < 800) return; // cooldown between flips
      lockRef.current = now;
      goTo(indexRef.current + dir);
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 8) return;
      e.preventDefault();
      advance(e.deltaY > 0 ? 1 : -1);
    };

    // Touch: record swipe direction; scroll-snap lands on the page.
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) advance(dy > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault(); advance(1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault(); advance(-1);
      } else if (e.key === "Home") { e.preventDefault(); goTo(0); }
      else if (e.key === "End") { e.preventDefault(); goTo(pages.length - 1); }
    };

    // Keep index in sync if user drags the scrollbar.
    const onScroll = () => {
      const i = Math.round(container.scrollTop / window.innerHeight);
      if (i !== indexRef.current) indexRef.current = i;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="pager">
      {children}
    </div>
  );
}
