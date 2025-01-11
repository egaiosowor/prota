import { createClient } from "@/lib/supabase/server";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div>
      <p>Welcome back, {data?.user?.email}</p>
    </div>
  );
}
