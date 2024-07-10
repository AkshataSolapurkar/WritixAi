"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { userSidebarLinks } from "@/helpers/constants";

const Sidebar = ({ id }: { id: string }) => {
  const pathname = usePathname();

  return (
    <aside className="md:rounded-xl rounded-l w-full h-full bg-[#ffffff] shadow-custom-inset md:mr-[6%] mr-[15px] px-[4px]">
      <p>Menu</p>
      <ul className="flex flex-col justify-start items-start gap-4 h-full no-scrollbar overflow-y-auto pt-5">
        {userSidebarLinks.map((item) => {
          return (
            <Link href={item.href} key={item.href} passHref className="w-full">
              <li
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl md:rounded-full xl:rounded-xl w-full cursor-pointer",
                  pathname === item.href
                    ? "bg-green-200 text-green-900 animate__animated animate__pulse"
                    : "hover:bg-gray-200 text-gray-600",
                  "transition-colors duration-200"
                )}
              >
                <item.icon
                  className={cn(
                    "size-5",
                    pathname === item.href ? "stroke-green-900" : "stroke-green-600"
                  )}
                />
                <span
                  className={cn(
                    "ml-2",
                    pathname === item.href ? "text-green-900" : ""
                  )}
                >
                  {item.label}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
