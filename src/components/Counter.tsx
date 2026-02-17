'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
}

export default function Counter({ target, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
}
