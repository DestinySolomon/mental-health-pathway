import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = Math.max(1, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
