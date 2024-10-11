import { z } from "zod"


export enum Title {
  SALES= "sales",
  SUPPORT= "support",
  MARKETING= "marketing"
}

export enum Roles {
  ADMIN= "admin",
  REGULAR= "regular"
}

export enum Gender {
  MALE= "male",
  FEMALE= "female"
}


export type User = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  title: string
  gender: string
  avatar_url: string
}


export const signupFormSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: 'First Name must be at least 2 characters long.' })
    .trim(),
  last_name: z
    .string()
    .min(2, { message: 'Last Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});


export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password field must not be empty.' }),
});


export const profileFormSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: 'First Name must be at least 2 characters long.' })
    .trim(),
  last_name: z
    .string()
    .min(2, { message: 'Last Name must be at least 2 characters long.' })
    .trim(),
  title: z.string(),
  gender: z.string(),
  phone: z
    .string()
    .regex(/^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/, {message: "Invalid Format"})
});