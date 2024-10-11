import CreateMenu from "../ui/createMenu"
import UserCard from "../ui/userCard";

const Header = () => {
    return(
        <div className="flex justify-end py-4 px-4 border-b" >
            <div className="flex items-center space-x-3 text-2xl" >
                <CreateMenu/>
                <UserCard/>             
            </div>
        </div>
    )
}

export default Header;