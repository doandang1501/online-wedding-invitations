"use client";

import { useState } from "react";
import type { GalleryItem } from "@/data/wedding";

/**
 * Renders a real image when it loads, otherwise a warm solid placeholder block.
 * Lets the layout ship before the client sends final photos — just drop files
 * into /public/images/wedding later and they will appear automatically.
 */
export default function Photo({
  item,
  ratio = "4/5",
  tag,
  className = "",
}: {
  item: Pick<GalleryItem, "src" | "alt" | "tone">;
  ratio?: string;
  tag?: string;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  const hasImage = Boolean(item.src) && !broken;

  if (!hasImage) {
    return (
      <div
        className={`photo photo--placeholder ph tone-${item.tone ?? "beige"} ${className}`}
        style={{ ["--ratio" as never]: ratio }}
        role="img"
        aria-label={item.alt}
      >
        <span className="photo__tag">{tag ?? "Photo"}</span>
      </div>
    );
  }

  return (
    <figure className={`photo ${className}`} style={{ ["--ratio" as never]: ratio }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.alt} loading="lazy" onError={() => setBroken(true)} />
    </figure>
  );
}
