import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/layout/navbar/navbar";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Users | Prota",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full">
        <Header />
        <main className="p-7 h-full bg-[#F6F6F8]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
