import Link from "next/link";
import Image from "next/image";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton, useSidebar,
} from "@/components/ui/sidebar";

const SidebarUserHeader = () => {
  const { state } = useSidebar();
  return (
    <SidebarHeader className="py-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/" className={`${state === 'collapsed' && 'justify-center'} `}>
              <Image
                className="rounded-full flex-shrink-0"
                src="/profile.jpeg"
                alt="logo"
                width={25}
                height={25}
                style={{ minWidth: '25px', minHeight: '25px' }}
              />
              <span>Bahadur Ali</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )


}


export default SidebarUserHeader;

