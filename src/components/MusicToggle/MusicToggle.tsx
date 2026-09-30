"use client";

import { useEffect, useRef, useState } from "react";
import { wedding } from "@/data/wedding";

/**
 * Music is ON (unmuted) by default and loops forever.
 * Browsers that block autoplay-with-sound start it on the guest's first
 * touch/click instead. The button lets the guest mute it again manually.
 */
export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Try to autoplay on mount; if blocked, play on the first interaction.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 1;

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    tryPlay();

    const unlock = () => {
      tryPlay();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={wedding.music.src} loop preload="auto" />
      <button
        type="button"
        className="music-btn"
        onClick={toggle}
        aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
        aria-pressed={playing}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
          {!playing && <line className="line" x1="2" y1="2" x2="22" y2="22" />}
        </svg>
      </button>
    </>
  );
}
