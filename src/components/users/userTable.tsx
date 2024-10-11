import ActionMenu from "../ui/actionMenu"; 
import { toStartCase } from "@/lib/utils";
import type { User } from "@/lib/definitions";

export default function UserTable({users}: { users: User[] }) {
    return (
        <div className="bg-white border rounded-xl p-4 space-y-4">
            <h4>
                Search Bar
            </h4>   
            <table className="user-table" >
                <thead>
                    <tr className="" >
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user) => (
                            <tr key={user.email}>
                                <td>{users.indexOf(user) + 1}</td>
                                <td className="flex items-center space-x-1" ><img className="w-8 h-8 rounded-full" src={user.avatar_url || "https://flowbite.com/docs/images/people/profile-picture-4.jpg"} alt={user.first_name} /><p>{`${user.first_name} ${user.last_name}`}</p></td>
                                <td>{user.email}</td>
                                <td>{toStartCase(user.gender)}</td>
                                <td>{toStartCase(user.title)}</td>
                                <td className="relative" >
                                    <ActionMenu id={user.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}