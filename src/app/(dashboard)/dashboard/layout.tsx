"use client";

import { useState } from "react";
import SideNavbar from "@/components/dashboard components/SideNavbar";
import Header from "@/components/dashboard components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideNavbar collapsed={collapsed} onToggle={handleToggle} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggle={handleToggle} />
        <main className="p-4 overflow-y-auto h-full">{children}</main>
      </div>
    </div>
  );
}
