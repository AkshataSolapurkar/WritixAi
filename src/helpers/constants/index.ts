import { Edit } from "lucide-react";
import { SidebarLink } from "../types";
import { LayoutDashboard } from "lucide-react";
import { ListOrderedIcon, } from "lucide-react";
import { HandHelping } from "lucide-react";

export const userSidebarLinks: SidebarLink[] = [
    {
      icon: LayoutDashboard,
      href: "/adminpannel/dashboard",
      label: "Dashboard",
    },
    {
      icon: Edit,
      href: "/adminpannel/edit",
      label: "Product Management",
    },
    {
      icon: ListOrderedIcon,
      href: "/adminpannel/orderdetails",
      label: "Order overview",
    },
    {
      icon: HandHelping,
      href: "/adminpannel/customerdetails",
      label: "Customer Details",
    },
    
  ];