"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { userSidebarLinks } from "@/helpers/constants";

const Sidebarsmall = ({ id }: { id: string }) => {
  const pathname = usePathname();

  return (
    <div>
      {/* Desktop Sidebar */}
      <aside className="md:rounded-xl rounded-l w-full h-full bg-[#ffffff] shadow-custom-inset md:mr-[6%] mr-[15px] px-[4px] hidden md:block">
        <p className="text-gray-600 font-semibold text-[18px]">Menu</p>
        <ul className="flex flex-col justify-start items-start gap-4 h-full no-scrollbar overflow-y-auto pt-5">
          {userSidebarLinks.map((item) => (
            <Link href={item.href} key={item.href} passHref>
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
          ))}
        </ul>
      </aside>

      {/* Mobile Sidebar */}
      <aside className="fixed bottom-0 left-0 right-0 md:hidden bg-[#ffffff] shadow-custom-inset px-[4px] border-t border-gray-200">
        <ul className="flex justify-between items-center gap-2 h-full py-2">
          {userSidebarLinks.map((item) => (
            <Link href={item.href} key={item.href} passHref>
              <li
                className={cn(
                  "flex flex-col items-center gap-1 px-2 py-1 rounded-xl cursor-pointer",
                  pathname === item.href
                    ? "bg-green-200 text-green-900"
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
                    "text-xs",
                    pathname === item.href ? "text-green-900 text-center" : ""
                  )}
                >
                  {item.label}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebarsmall;
