import { LucideIcon } from "lucide-react";

export type SidebarItemProps = {
  item: {
    href: string;
    label: string;
    icon: LucideIcon,
  },
  key: string;
}