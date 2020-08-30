import {environment} from '../environments/environment';

export function emojiName(name: string, message: string): string {
  return `${name ? name : '🧑‍🎤'} ${message}`;
}

export function safeLog(message: string, ...object: any) {
  if (!environment.production) {
    console.log(message, object);
  }
}
