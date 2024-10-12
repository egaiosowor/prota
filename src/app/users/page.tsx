import { getUsers } from "@/actions/actions";
import UserTable from "@/components/users/userTable";

export default async function UsersList(){

    const users = await getUsers()

    return(
        <div>
            <UserTable users={users} />
        </div>
    )
}