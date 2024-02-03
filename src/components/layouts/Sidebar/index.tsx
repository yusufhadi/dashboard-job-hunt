import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { BsBuildings } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuCalendarRange } from "react-icons/lu";
import { RxGear } from "react-icons/rx";
import { SlLogout } from "react-icons/sl";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
        </div>
        <div className="space-y-3">
          <Button
            className="w-full justify-start rounded-none hover:text-primary"
            variant={"ghost"}
          >
            <IoHomeOutline className="mr-2 text-lg" />
            Home
          </Button>
          <Button
            className="w-full justify-start rounded-none hover:text-primary"
            variant={"ghost"}
          >
            <TiMessages className="mr-2 text-lg" />
            Messages
          </Button>
          <Button
            className="w-full justify-start rounded-none hover:text-primary"
            variant={"ghost"}
          >
            <BsBuildings className="mr-2 text-lg" />
            Company Profile
          </Button>
          <Button
            className="w-full justify-start rounded-none hover:text-primary"
            variant={"ghost"}
          >
            <AiOutlineUsergroupAdd className="mr-2 text-lg" />
            All Applicants
          </Button>
          <Button
            className="w-full justify-start rounded-none hover:text-primary"
            variant={"ghost"}
          >
            <HiOutlineClipboardDocumentList className="mr-2 text-lg" />
            Job Listings
          </Button>
          <Button
            className="w-full justify-start rounded-none hover:text-primary"
            variant={"ghost"}
          >
            <LuCalendarRange className="mr-2 text-lg" />
            My Schedules
          </Button>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
        </div>
        <Button
          className="w-full justify-start rounded-none hover:text-primary"
          variant={"ghost"}
        >
          <RxGear className="mr-2 text-lg" />
          Settings
        </Button>
        <Button
          className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none "
          variant={"ghost"}
        >
          <SlLogout className="mr-2 text-lg" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
