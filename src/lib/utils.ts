import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


export function toStartCase(word: string){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
