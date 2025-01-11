import React from "react";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Prota ",
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
