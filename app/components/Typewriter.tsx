"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

export default function Typewriter({
  words,
  className,
  typeSpeed = 75,
  deleteSpeed = 40,
  pauseMs = 2400,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (pauseRef.current) return;

    const current = words[wordIndex % words.length];

    if (!isDeleting && text === current) {
      // Finished typing — pause then start deleting
      pauseRef.current = true;
      const t = setTimeout(() => {
        pauseRef.current = false;
        setIsDeleting(true);
      }, pauseMs);
      return () => clearTimeout(t);
    }

    if (isDeleting && text === "") {
      // Finished deleting — move to next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const delay = isDeleting ? deleteSpeed : typeSpeed;
    const t = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(t);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return (
    <span className={className}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
