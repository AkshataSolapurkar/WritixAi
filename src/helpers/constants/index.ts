import { Edit } from "lucide-react";
import { SidebarLink } from "../types";
import { LayoutDashboard } from "lucide-react";
import { ListOrderedIcon, } from "lucide-react";
import { HandHelping } from "lucide-react";

export const userSidebarLinks: SidebarLink[] = [
    {
      icon: LayoutDashboard,
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      icon: Edit,
      href: "/edit",
      label: "Product Management",
    },
    {
      icon: ListOrderedIcon,
      href: "/orderdetails",
      label: "Order overview",
    },
    {
      icon: HandHelping,
      href: "/customerdetails",
      label: "Customer Details",
    },
    
  ];