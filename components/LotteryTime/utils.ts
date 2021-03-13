export function formatTime(time: number) {
  const minutes = `${Math.floor(time / 60)}`.padStart(2, '0');
  const seconds = `${Math.round(time % 60)}`.padStart(2, '0');

  return `${minutes}:${seconds}`;
}
