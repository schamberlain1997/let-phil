import { useState, useEffect, useRef } from 'react';

interface RestTimerProps {
  onClose: () => void;
}

export default function RestTimer({ onClose }: RestTimerProps) {
  const [duration, setDuration] = useState(90);
  const [seconds, setSeconds] = useState(90);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => setSeconds(s => s - 1), 1000);
    } else if (seconds === 0) {
      playAlert();
      setIsRunning(false);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, seconds]);

  function playAlert() {
    try {
      const ctx = new AudioContext();
      [0, 0.15, 0.3].forEach(delay => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.4, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.3);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.3);
      });
    } catch {}
  }

  function setPreset(s: number) {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDuration(s);
    setSeconds(s);
    setIsRunning(true);
  }

  function toggle() {
    setIsRunning(r => !r);
  }

  function reset() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSeconds(duration);
    setIsRunning(true);
  }

  const progress = seconds / duration;
  const circumference = 2 * Math.PI * 44;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const done = seconds === 0;

  return (
    <div className="fixed bottom-6 right-6 bg-[#1e293b] border border-[#334155] rounded-xl p-5 shadow-2xl w-64 z-50">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-white">Rest Timer</span>
        <button onClick={onClose} className="text-[#94a3b8] hover:text-white text-xl leading-none">×</button>
      </div>

      <div className="flex justify-center mb-3">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="#334155" strokeWidth="6"/>
          <circle
            cx="50" cy="50" r="44" fill="none"
            stroke={done ? '#ef4444' : '#10b981'}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
          <text x="50" y="56" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
            {mins}:{secs.toString().padStart(2, '0')}
          </text>
        </svg>
      </div>

      <div className="flex gap-2 mb-2">
        <button onClick={toggle}
          className="flex-1 bg-[#10b981] text-white rounded-lg py-2 text-sm font-medium hover:bg-[#059669] transition-colors">
          {isRunning ? 'Pause' : 'Resume'}
        </button>
        <button onClick={reset}
          className="px-3 bg-[#334155] text-white rounded-lg py-2 text-sm hover:bg-[#475569] transition-colors">
          Reset
        </button>
      </div>

      <div className="flex gap-1">
        {[60, 90, 120, 180].map(s => (
          <button key={s} onClick={() => setPreset(s)}
            className={`flex-1 text-xs py-1.5 rounded border transition-colors ${
              duration === s
                ? 'border-[#10b981] text-[#10b981]'
                : 'border-[#334155] text-[#94a3b8] hover:border-[#10b981] hover:text-[#10b981]'
            }`}>
            {s}s
          </button>
        ))}
      </div>
    </div>
  );
}