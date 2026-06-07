"use client";
import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function AnimatedCounter({ target, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v * 10) / 10),
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  const display =
    target >= 1000
      ? Number(Math.round(value)).toLocaleString("en-IN")
      : String(value % 1 !== 0 ? value.toFixed(1) : Math.round(value));

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
