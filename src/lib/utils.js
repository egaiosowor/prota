import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


export function toStartCase(word){
    return word?.charAt(0).toUpperCase() + word?.slice(1).toLowerCase();
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
