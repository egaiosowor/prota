import React from "react";
import Navbar from "@/components/layout/navbar/navbar";
import Header from "@/components/layout/header";


const Layout = ({children}: { children: React.ReactNode }) => {
    return(
        <div className="flex" >
            <Navbar />
            <div className="w-full">
                <Header/>
                <main className="p-7 h-full bg-[#F6F6F8]" >
                    {children}
                </main>  
            </div>
        </div>
    )
}

export default Layout;