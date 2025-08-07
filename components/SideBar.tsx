import React from "react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-y-2">
      {/* 
      <div className="text-gray-600 font-bold text-[0.75em]">My Documents</div>
      {Array.from({ length: 10 }).map((_, index) => (
        <button
          className="flex justify-center p-1 rounded-sm border-gray-900 border-1 hover:bg-gray-200"
          key={index}
        >
          Document
        </button>
      ))} */}
      <div className="hidden md:inline">
        <Button>New Document</Button>
      </div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon
            className="inline md:hidden p-2 hover:opacity-50"
            size={45}
          />
        </SheetTrigger>
        <SheetContent side="left" className="items-center">
          <SheetHeader>
            <SheetTitle className="text-center">Menu</SheetTitle>
            <div>
              <Button>New Document</Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideBar;
