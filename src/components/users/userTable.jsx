import { GoKebabHorizontal } from "react-icons/go";

export default function UserTable({users}) {
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
                            <tr>
                                <td>{users.indexOf(user) + 1}</td>
                                <td className="flex items-center space-x-1" ><img className="w-8 h-8 rounded-full" src={user.avatar_ur || "https://flowbite.com/docs/images/people/profile-picture-4.jpg"} alt={user.name} /><p>{`${user.first_name} ${user.last_name}`}</p></td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.title}</td>
                                <td><GoKebabHorizontal className="w-full inline-block cursor-pointer" /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}