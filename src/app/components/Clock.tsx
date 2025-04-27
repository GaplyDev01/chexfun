import { useEffect, useRef, useState } from "react";

interface ClockProps {
  initialSeconds: number;
  isRunning: boolean;
  onTimeout: () => void;
  keyProp: string;
}

export default function Clock({ initialSeconds, isRunning, onTimeout, keyProp }: ClockProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds, keyProp]);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          onTimeout();
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, onTimeout]);

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return (
    <span className="font-mono text-lg">
      {min}:{sec.toString().padStart(2, "0")}
    </span>
  );
}
