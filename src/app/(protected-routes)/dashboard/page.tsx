import { createClient } from "@/lib/supabase/client";

export default async function Dashboard() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div>
      <p>Welcome back, {data?.user?.email}</p>
    </div>
  );
}
