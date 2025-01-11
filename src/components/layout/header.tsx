import CreateMenu from "../ui/createMenu";
import { SidebarTrigger } from "../ui/sidebar";
import UserCard from "../ui/userCard";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-4 border-b">
      <SidebarTrigger className="-ml-1" />
      <div className="flex items-center space-x-3 text-2xl">
        <CreateMenu />
        <UserCard />
      </div>
    </div>
  );
};

export default Header;
