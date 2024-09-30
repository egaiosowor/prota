import { GoKebabHorizontal } from "react-icons/go";

const users = [
    {
        id: "nsdsd",
        name: "Egai-Osowor Etta-Ekuri",
        avatar_ur: "",
        email: "egaiosowor@yahoo.com",
        gender: "Male",
        title: "Sales",
    },
    {
        id: "nssdsdsdw",
        name: "John Doe",
        avatar_ur: "",
        email: "johndoe@gmail.com",
        gender: "Male",
        title: "Support",
    },
    {
        id: "nsdsasd",
        name: "Jane Doe",
        avatar_ur: "",
        email: "Jane Doe",
        gender: "Female",
        title: "Sales",
    },
]

export default function UserTable() {
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
                                <td className="flex items-center space-x-1" ><img className="w-8 h-8 rounded-full" src={user.avatar_ur || "https://flowbite.com/docs/images/people/profile-picture-4.jpg"} alt={user.name} /><p>{user.name}</p></td>
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