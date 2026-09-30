"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diff(target: number): Parts {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1_000) % 60,
  };
}

export default function Countdown() {
  const target = new Date(wedding.datetimeISO).getTime();
  const [t, setT] = useState<Parts | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, number][] = [
    ["Days", t?.days ?? 0],
    ["Hours", t?.hours ?? 0],
    ["Minutes", t?.minutes ?? 0],
    ["Seconds", t?.seconds ?? 0],
  ];

  return (
    <div className="countdown" role="timer" aria-label="Countdown to the wedding">
      {cells.map(([label, value]) => (
        <div className="countdown__cell" key={label}>
          <span className="countdown__num">{String(value).padStart(2, "0")}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
