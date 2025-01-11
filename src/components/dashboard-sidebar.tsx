"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  getAccountsRoute,
  getCalendarRoute,
  getCasesRoute,
  getContactsRoute,
  getDashboardRoute,
  getLeadsRoute,
  getActivitiesRoute,
} from "@/routes";
import {
  CalendarFold,
  FolderOpenDot,
  LayoutDashboard,
  UserCheck,
  UserRound,
  UserRoundPlus,
  UsersRound,
  BriefcaseBusiness,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoSymbol, LogoCombination } from "./logo";
import { signOut } from "@/actions/actions";

export function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { className, ...rest } = props;
  const currentPath = usePathname();

  return (
    <Sidebar {...rest} className={cn("bg-white md:max-lg:w-fit", className)}>
      <SidebarHeader className=" px-6 py-4 md:max-lg:px-0">
        <Link href={getDashboardRoute()} className="flex md:max-lg:mx-auto">
          <LogoSymbol className="hidden md:max-lg:block" />
          <LogoCombination className="md:max-lg:hidden" />
        </Link>
      </SidebarHeader>

      <SidebarContent className="gap-y-4 pt-6 !text-base md:max-lg:items-center md:max-lg:px-1 scrollbar-thin scroll-smooth scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {/* Dashboard */}
        <SidebarMenu className="md:max-lg:w-fit">
          <SidebarMenuItem className="md:max-lg:w-fit">
            <SidebarMenuButton
              asChild
              isActive={currentPath === getDashboardRoute()}
              className={`px-6 h-12 text-base text-[#1B1B1B] transition-all duration-300 rounded-none data-[active=true]:border-l-4 data-[active=true]:border-[#E34136]  hover:bg-[#e342361a] hover:text-[#E34136] focus-visible:bg-transparent focus-visible:text-[#E34136] data-[active=true]:bg-[#e342361a] data-[active=true]:text-[#E34136] md:max-lg:size-10 md:max-lg:justify-center`}
              title="Dashboard"
              tooltip="Dashboard"
            >
              <Link href={getDashboardRoute()}>
                <LayoutDashboard className="size-4" />
                <span className="md:max-lg:hidden">Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* LEADS */}
        <SidebarGroup className="gap-y-1 p-0 md:max-lg:w-fit">
          <SidebarGroupLabel className="px-6 group/label font-semibold text-[#1b1b1bad] md:max-lg:hidden">
            Leads
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="md:max-lg:w-fit">
              {/* Contacts */}
              {/* Accounts */}
              <SidebarMenuItem className="md:max-lg:w-fit">
                <SidebarMenuButton
                  asChild
                  isActive={currentPath === getAccountsRoute()}
                  className={`px-6 h-12 text-base text-[#1B1B1B] transition-all duration-300 rounded-none data-[active=true]:border-l-4 data-[active=true]:border-[#E34136]  hover:bg-[#e342361a] hover:text-[#E34136] focus-visible:bg-transparent focus-visible:text-[#E34136] data-[active=true]:bg-[#e342361a] data-[active=true]:text-[#E34136] md:max-lg:size-10 md:max-lg:justify-center`}
                  title="Accounts"
                  tooltip="Accounts"
                >
                  <Link href={getAccountsRoute()}>
                    <UserRound className="size-4" />
                    <span className="md:max-lg:hidden">Accounts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className="md:max-lg:w-fit">
                <SidebarMenuButton
                  asChild
                  isActive={currentPath === getContactsRoute()}
                  className={`px-6 h-12 text-base text-[#1B1B1B] transition-all duration-300 rounded-none data-[active=true]:border-l-4 data-[active=true]:border-[#E34136]  hover:bg-[#e342361a] hover:text-[#E34136] focus-visible:bg-transparent focus-visible:text-[#E34136] data-[active=true]:bg-[#e342361a] data-[active=true]:text-[#E34136] md:max-lg:size-10 md:max-lg:justify-center`}
                  title="Contacts"
                  tooltip="Contacts"
                >
                  <Link href={getContactsRoute()}>
                    <UserRoundPlus className="size-4" />
                    <span className="md:max-lg:hidden">Contacts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Leads */}
              <SidebarMenuItem className="md:max-lg:w-fit">
                <SidebarMenuButton
                  asChild
                  isActive={currentPath === getLeadsRoute()}
                  className={`px-6 h-12 text-base text-[#1B1B1B] transition-all duration-300 rounded-none data-[active=true]:border-l-4 data-[active=true]:border-[#E34136]  hover:bg-[#e342361a] hover:text-[#E34136] focus-visible:bg-transparent focus-visible:text-[#E34136] data-[active=true]:bg-[#e342361a] data-[active=true]:text-[#E34136] md:max-lg:size-10 md:max-lg:justify-center`}
                  title="Leads"
                  tooltip="Leads"
                >
                  <Link href={getLeadsRoute()}>
                    <UsersRound className="size-4" />
                    <span className="md:max-lg:hidden">Leads</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Calendar */}
              <SidebarMenuItem className="md:max-lg:w-fit">
                <SidebarMenuButton
                  asChild
                  isActive={currentPath === getCalendarRoute()}
                  className={`px-6 h-12 text-base text-[#1B1B1B] transition-all duration-300 rounded-none data-[active=true]:border-l-4 data-[active=true]:border-[#E34136]  hover:bg-[#e342361a] hover:text-[#E34136] focus-visible:bg-transparent focus-visible:text-[#E34136] data-[active=true]:bg-[#e342361a] data-[active=true]:text-[#E34136] md:max-lg:size-10 md:max-lg:justify-center`}
                  title="Calendar"
                  tooltip="Calendar"
                >
                  <Link href={getCalendarRoute()}>
                    <CalendarFold className="size-4" />
                    <span className="md:max-lg:hidden">Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Cases */}
        <SidebarGroup className="gap-y-1 p-0 md:max-lg:w-fit">
          <SidebarGroupLabel className="px-6 group/label font-semibold text-[#1b1b1bad] md:max-lg:hidden">
            CASES
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="md:max-lg:w-fit">
              {/* Cases */}
              <SidebarMenuItem className="md:max-lg:w-fit">
                <SidebarMenuButton
                  asChild
                  isActive={currentPath === getCasesRoute()}
                  className={`px-6 h-12 text-base text-[#1B1B1B] transition-all duration-300 rounded-none data-[active=true]:border-l-4 data-[active=true]:border-[#E34136]  hover:bg-[#e342361a] hover:text-[#E34136] focus-visible:bg-transparent focus-visible:text-[#E34136] data-[active=true]:bg-[#e342361a] data-[active=true]:text-[#E34136] md:max-lg:size-10 md:max-lg:justify-center`}
                  title="Cases"
                  tooltip="Cases"
                >
                  <Link href={getCasesRoute()}>
                    <BriefcaseBusiness className="size-4" />
                    <span className="md:max-lg:hidden">Cases</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Activities */}
              <SidebarMenuItem className="md:max-lg:w-fit">
                <SidebarMenuButton
                  asChild
                  isActive={currentPath === getActivitiesRoute()}
                  className={`px-6 h-12 text-base text-[#1B1B1B] transition-all duration-300 rounded-none data-[active=true]:border-l-4 data-[active=true]:border-[#E34136]  hover:bg-[#e342361a] hover:text-[#E34136] focus-visible:bg-transparent focus-visible:text-[#E34136] data-[active=true]:bg-[#e342361a] data-[active=true]:text-[#E34136] md:max-lg:size-10 md:max-lg:justify-center`}
                  title="Activities"
                  tooltip="Activities"
                >
                  <Link href={getActivitiesRoute()}>
                    <FolderOpenDot className="size-4" />
                    <span className="md:max-lg:hidden">Activities</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="">
        <SignOutButton />
      </SidebarFooter>
    </Sidebar>
  );
}

function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className={`flex space-x-2 items-center text-[#1B1B1B] text-base px-4 hover:text-[#E34136] hover:bg-[#e342361a]`}
    >
      <LogOut className="size-4" />
      <p>Logout</p>
    </button>
  );
}
