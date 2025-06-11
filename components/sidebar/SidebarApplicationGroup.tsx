import Link from "next/link";
import {
  Home, FilePenLine,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Posts", url: "/admin", icon: FilePenLine },
];

const SidebarApplicationGroup = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Apps</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map(({ title, url, icon: Icon, }) => (
          <SidebarMenuItem key={title}>
            <SidebarMenuButton asChild>
              <Link href={url}>
                <Icon />
                <span>{title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
);

export default SidebarApplicationGroup;
