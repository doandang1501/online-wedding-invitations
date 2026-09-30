"use client";

import { useEffect, useRef } from "react";
import type { GalleryItem } from "@/data/wedding";
import Photo from "@/components/Photo";

export default function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Photo item={item} ratio="auto" className="lightbox__media" tag="Photo" />
      </div>

      <button
        ref={closeRef}
        type="button"
        className="lightbox__btn lightbox__close"
        onClick={onClose}
        aria-label="Đóng"
      >
        Close ✕
      </button>
      <button
        type="button"
        className="lightbox__btn lightbox__prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Ảnh trước"
      >
        ‹
      </button>
      <button
        type="button"
        className="lightbox__btn lightbox__next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Ảnh sau"
      >
        ›
      </button>
      <span className="lightbox__counter">
        {index + 1} / {total}
      </span>
    </div>
  );
}
