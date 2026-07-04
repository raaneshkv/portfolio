import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndexCounter = 0;

  return (
    <p ref={ref} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] mb-1">
            {wordChars.map((char) => {
              const currentIdx = charIndexCounter++;
              return (
                <AnimatedChar
                  key={currentIdx}
                  char={char}
                  index={currentIdx}
                  total={totalChars}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const AnimatedChar = ({ char, index, total, scrollYProgress }: AnimatedCharProps) => {
  const start = index / total;
  const end = Math.min(start + 1 / total + 0.05, 1);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
