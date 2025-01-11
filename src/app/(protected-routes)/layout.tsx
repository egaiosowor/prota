import React from "react";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Prota ",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="w-full">
        <Header />
        <main className="p-7 h-full bg-[#F6F6F8]">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
