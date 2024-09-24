import Notififications from "./notifications";
import CreateMenu from "./createMenu"
import UserCard from "./userCard";

const Topbar = () => {
    return(
        <div className="flex justify-end py-4 px-4 border-b" >
            <div className="flex items-center space-x-3 text-2xl" >
                <CreateMenu/>
                <Notififications />
                <UserCard/>             
            </div>
        </div>
    )
}

export default Topbar;