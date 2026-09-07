"use client";

import { useEffect, useRef } from "react";

/** Perspective is optional; content and navigation are rendered without it. */
export function DepthSurface({
  children,
  className = "",
  scroll = false,
}: {
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (
        !query.matches ||
        connection?.saveData ||
        navigator.hardwareConcurrency <= 4
      )
        return;
      let frame = 0;
      let x = 0;
      let y = 0;
      let bounds: DOMRect | null = null;
      let visible = true;
      const draw = () => {
        frame = 0;
        if (document.hidden || !visible) return;
        const progress = scroll
          ? Math.max(
              0,
              Math.min(
                1,
                -element.getBoundingClientRect().top / element.offsetHeight,
              ),
            )
          : 0;
        element.style.setProperty("--rx", `${-y * 2}deg`);
        element.style.setProperty("--ry", `${x * 2}deg`);
        element.style.setProperty("--mx", `${x * 10}px`);
        element.style.setProperty("--my", `${y * 6}px`);
        element.style.setProperty("--light-x", `${50 + x * 35}%`);
        element.style.setProperty("--light-y", `${50 + y * 35}%`);
        element.style.setProperty("--scroll-car", `${progress * 65}px`);
        element.style.setProperty("--scroll-text", `${progress * 24}px`);
        element.style.setProperty("--water-opacity", `${1 - progress}`);
      };
      const schedule = () => {
        if (!frame && visible && !document.hidden)
          frame = requestAnimationFrame(draw);
      };
      const enter = () => {
        bounds = element.getBoundingClientRect();
      };
      const move = (event: PointerEvent) => {
        if (!bounds) bounds = element.getBoundingClientRect();
        x = (event.clientX - bounds.left) / bounds.width - 0.5;
        y = (event.clientY - bounds.top) / bounds.height - 0.5;
        schedule();
      };
      const leave = () => {
        x = 0;
        y = 0;
        bounds = null;
        schedule();
      };
      const scrolled = () => {
        bounds = null;
        if (scroll) schedule();
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) schedule();
      });
      observer.observe(element);
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      window.addEventListener("scroll", scrolled, { passive: true });
      window.addEventListener("resize", leave, { passive: true });
      document.addEventListener("visibilitychange", schedule);
      dispose = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
        window.removeEventListener("scroll", scrolled);
        window.removeEventListener("resize", leave);
        document.removeEventListener("visibilitychange", schedule);
        for (const name of [
          "--rx",
          "--ry",
          "--mx",
          "--my",
          "--light-x",
          "--light-y",
          "--scroll-car",
          "--scroll-text",
          "--water-opacity",
        ])
          element.style.removeProperty(name);
      };
    };
    setup();
    query.addEventListener("change", setup);
    return () => {
      dispose();
      query.removeEventListener("change", setup);
    };
  }, [scroll]);
  return (
    <div className={`depth-surface ${className}`} ref={ref}>
      {children}
    </div>
  );
}
