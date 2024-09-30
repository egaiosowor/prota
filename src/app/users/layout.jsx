import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar/topbar";


const Layout = ({children}) => {
    return(
        <div className="flex" >
            <Navbar />
            <div className="w-full">
                <Topbar/>
                <main className="p-7 h-full bg-[#F6F6F8]" >
                    {children}
                </main>  
            </div>
        </div>
    )
}

export default Layout;