import { getUsers } from "@/lib/db";
import Search from "@/components/ui/search";
import UsersTable from "@/components/ui/usersTable";
import Pagination from "@/components/ui/pagination";

export default async function UsersList({
  searchParams,
}: {
  searchParams: {
    query?: string;
    page?: string;
  };
}) {
  const users = await getUsers(searchParams.query);

  return (
    <div className="bg-white border rounded-xl p-4 space-y-4">
      <Search />
      <UsersTable users={users} />
      {searchParams.query && (
        <p className="text-sm">Showing {users?.length} users</p>
      )}
      <Pagination />
    </div>
  );
}
