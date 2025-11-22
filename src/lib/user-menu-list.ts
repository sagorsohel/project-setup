import {
  LayoutGrid,
  User,
  Settings,
  type LucideIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getUserMenuList(_pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/user/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Account",
      menus: [
        {
          href: "/user/profile",
          label: "Profile",
          icon: User
        },
        {
          href: "/user/settings",
          label: "Settings",
          icon: Settings
        }
      ]
    }
  ];
}

