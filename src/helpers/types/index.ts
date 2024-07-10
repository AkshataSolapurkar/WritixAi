export type SidebarLink = {
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    label: string;
  };
  export type NavbarProps = {
    isActive:boolean
    href: string;
    label: string;
    onClick:(href: string) => void;
  };