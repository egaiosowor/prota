import { createClient } from "@/lib/supabase/client";
import type { User } from "./definitions";

export const getUser = async (id: string | undefined): Promise<User | null> => {
  const supabase = createClient();

  try {
    const { data: user } = await supabase
      .from("profiles")
      .select(
        `id, first_name, last_name, email, phone, title, gender, avatar_url`
      )
      .eq("id", id)
      .single();

    return user as User;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getUsers = async (query?: string): Promise<User[] | null> => {
  const supabase = createClient();

  if (query) {
    try {
      const { data: users } = await supabase
        .from("profiles")
        .select(
          `id, first_name, last_name, email, phone, title, gender, avatar_url`
        )
        .textSearch("first_name", query, {
          type: "phrase",
          config: "english",
        });

      return users as User[];
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  try {
    const { data: users } = await supabase
      .from("profiles")
      .select(
        `id, first_name, last_name, email, phone, title, gender, avatar_url`
      );
    return users as User[];
  } catch (err) {
    console.log(err);
    return null;
  }
};
