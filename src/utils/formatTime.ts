// Time formatting utilities
export function formatTime(timestamp: number): string {
  return time.formatTime(timestamp);
}

export function getCurrentTime(): string {
  return time.formatTime(time.now());
}