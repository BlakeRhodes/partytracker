export function emojiName(name: string, message: string): string {
  return `${name ? name : '🧑‍🎤'} ${message}`;
}
