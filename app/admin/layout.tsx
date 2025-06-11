'use client';

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/AppSidebar";
import AppNavbar from "@/components/navbar/AppNavbar";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SidebarProvider defaultOpen={true}>
      <Toaster />
      <Sonner />
      <AppSidebar />
      <main className="w-full">
        <AppNavbar />
        <div className="px-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
