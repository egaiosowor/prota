import { getUsers } from "@/lib/db";
import Search from "@/components/ui/search";
import UsersTable from "@/components/ui/usersTable";
import Pagination from "@/components/ui/pagination";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users | Prota",
};

export default async function UsersList({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {
  const { query } = await searchParams;
  const users = await getUsers(query);

  return (
    <div className="bg-white border rounded-xl p-4 space-y-4">
      <Search />
      <UsersTable users={users} />
      {query && <p className="text-sm">Showing {users?.length} users</p>}
      <Pagination />
    </div>
  );
}
