// Hook for timers
export function useTimer(callback: () => void, delay: number): { start: () => number, stop: (id: number) => void } {
  const start = (): number => {
    return time.setTimeout(callback, delay);
  };

  const stop = (id: number) => {
    time.clearTimeout(id);
  };

  return { start, stop };
}