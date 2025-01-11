"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import {
  SignupFormState,
  LoginFormState,
  ProfileFormState,
  SignupFormSchema,
  LoginFormSchema,
  ProfileFormSchema,
} from "@/lib/definitions";
import {
  getDashboardRoute,
  getLoginRoute,
  getProfileRoute,
  getUsersRoute,
} from "@/routes";

export async function login(
  state: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const supabase = await createClient();

  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return {
      message: error.message,
    };
    // redirect('/error')
  }

  revalidatePath("/", "layout");
  redirect(getDashboardRoute());
}

export async function signUp(
  state: SignupFormState,
  formData: FormData
): Promise<SignupFormState> {
  const supabase = await createClient();

  const validatedFields = SignupFormSchema.safeParse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { first_name, last_name, email, password } = validatedFields.data;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
        email,
      },
    },
  });

  if (error) {
    return { message: error.message };
    // redirect('/error')
  }

  revalidatePath("/", "layout");
  redirect(getLoginRoute());
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    redirect("/error");
  }

  redirect(getLoginRoute());
}

export async function updateProfile(
  state: ProfileFormState,
  formData: FormData
): Promise<ProfileFormState> {
  const { id, first_name, last_name, title, gender, phone } =
    Object.fromEntries(formData);

  const validatedFields = ProfileFormSchema.safeParse({
    first_name,
    last_name,
    title,
    gender,
    phone,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const formatPhone = (phone: string) => {
    return phone.split(" ").join("");
  };

  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id,
        first_name,
        last_name,
        title,
        gender,
        phone: formatPhone(phone as string),
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    revalidatePath(getUsersRoute());
    revalidatePath(`/users/${id}`);
    revalidatePath(getProfileRoute());

    if (error) throw error;
    console.log("Profile updated!");
  } catch (error: any) {
    console.log(error.message);
  }
}
