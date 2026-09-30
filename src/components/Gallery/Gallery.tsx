"use client";

import { useCallback, useEffect, useState } from "react";
import { wedding, features, type GalleryItem } from "@/data/wedding";
import { Reveal } from "@/lib/Reveal";
import Photo from "@/components/Photo";
import Lightbox from "@/components/Lightbox/Lightbox";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const items = wedding.gallery;
  const enabled = features.galleryLightbox;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <section className="section" aria-label="Gallery">
      <div className="container">
        <div className="gallery__head">
          <Reveal>
            <span className="eyebrow">Our Moments</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="gallery__title font-display">Gallery</h2>
          </Reveal>
        </div>

        <div className="gallery__grid">
          {items.map((item, i) => (
            <Reveal as="figure" key={i} delay={(i % 3) * 110}>
              <GalleryButton item={item} onOpen={() => enabled && setIndex(i)} />
            </Reveal>
          ))}
        </div>
      </div>

      {enabled && index !== null && (
        <Lightbox
          item={items[index]}
          index={index}
          total={items.length}
          onClose={close}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </section>
  );
}

function GalleryButton({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="gallery__item"
      onClick={onOpen}
      aria-label={`Xem ảnh: ${item.alt}`}
    >
      <Photo item={item} ratio="auto" tag="Photo" />
    </button>
  );
}
