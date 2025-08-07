import React from "react";
import { Button } from "./ui/button";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Button>New Document</Button>
      <div className="text-gray-600 font-bold text-[0.75em]">My Documents</div>
      {Array.from({ length: 10 }).map((_, index) => (
        <button
          className="flex justify-center p-1 rounded-sm border-gray-900 border-1 hover:bg-gray-200"
          key={index}
        >
          Document
        </button>
      ))}
    </div>
  );
};

export default SideBar;
