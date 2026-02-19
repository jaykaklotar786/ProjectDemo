'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  format?: 'number' | 'million';
  plus?: boolean;
}

export default function Counter({
  target,
  duration = 2000,
  format = 'number',
  plus = false,
}: CounterProps) {
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

  // 👇 Formatting logic
  const formatNumber = () => {
    if (format === 'million') {
      return (
        (count / 1000000).toFixed(1).replace('.0', '') + 'M' + (plus ? '+' : '')
      );
    }

    return count.toLocaleString();
  };

  return <span>{formatNumber()}</span>;
}
