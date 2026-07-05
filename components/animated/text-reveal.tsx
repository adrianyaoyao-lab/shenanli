"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  splitBy?: "word" | "char";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.8,
  once = true,
  splitBy = "word",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const items = splitBy === "char" ? text.split("") : text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration / items.length,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("inline", className)}
    >
      {items.map((item, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            variants={child}
            className="inline-block"
          >
            {splitBy === "char" ? item : item + " "}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
