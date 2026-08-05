import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 70,
  deletingSpeed = 35,
  pause = 1400
): string {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: number;

    const tick = () => {
      const word = words[wordIndex];

      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timeout = window.setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      timeout = window.setTimeout(tick, deleting ? deletingSpeed : typingSpeed);
    };

    timeout = window.setTimeout(tick, typingSpeed);
    return () => window.clearTimeout(timeout);
  }, [words, typingSpeed, deletingSpeed, pause]);

  return text;
}
