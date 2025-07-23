"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  LayoutDashboard,
  BarChart3,
  Briefcase,
  FileText,
  Warehouse,
  Mail,
  Users,
  MessageCircle,
  Brain,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", subItems: null },
  { icon: BarChart3, label: "Reporting", subItems: ["Dashboard", "Reports"] },
  {
    icon: Briefcase,
    label: "Commercial",
    subItems: ["Overview", "Sales Department", "Purchase Department", "Invoices"],
  },
  {
    icon: FileText,
    label: "Sales & Finance",
    subItems: ["Workspace", "Analysis", "Reports"],
  },
  {
    icon: Warehouse,
    label: "Stock Management",
    subItems: ["Inventory", "Warehouse", "Sourcing", "Tracking"],
  },
  {
    icon: Mail,
    label: "Marketing",
    subItems: ["Email Campaigns", "Social Media", "Reports"],
  },
  {
    icon: Users,
    label: "Human Resource",
    subItems: [
      "Employee Info",
      "Onboard/Offboard",
      "Attendance",
      "Performance",
      "Compliance",
      "Payroll",
    ],
  },
  {
    icon: MessageCircle,
    label: "Customer Support",
    subItems: ["Channels", "Tech Support", "Account Help"],
  },
  { icon: Brain, label: "Largify Insights", subItems: null },
];

export default function SideNavbar({ collapsed, onToggle }: SidebarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleToggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <div
      className={cn(
        "bg-white text-black transition-all duration-300 px-2 py-6 h-[95vh] m-4 rounded-2xl shadow-md relative z-50 flex flex-col",
        collapsed ? "w-[70px]" : "w-[220px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-center py-6">
        <span
          className={cn(
            "text-2xl font-bold text-center leading-tight",
            collapsed && "text-base"
          )}
        >
          Largify ERP
        </span>
      </div>

      {/* Navigation */}
      <div className="overflow-y-auto pr-1 flex-1 space-y-2">
        <nav className="flex flex-col space-y-3">
          {navItems.map(({ icon: Icon, label, subItems }, index) => {
            const hasSubItems = Array.isArray(subItems) && subItems.length > 0;
            const isOpen = openMenu === label;

            return (
              <Popover key={index} open={isOpen}>
                <PopoverTrigger asChild>
                  <div
                    onClick={() => handleToggleMenu(label)}
                    className={cn(
                      "flex items-center space-x-4 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#C8F7EE]",
                      collapsed && "justify-center space-x-0",
                      isOpen && "bg-[#C8F7EE]"
                    )}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </TooltipTrigger>
                      {collapsed && (
                        <TooltipContent side="right">
                          <span>{label}</span>
                        </TooltipContent>
                      )}
                    </Tooltip>
                    {!collapsed && <span>{label}</span>}
                  </div>
                </PopoverTrigger>

                {hasSubItems && (
                  <PopoverContent
                    className="bg-white rounded-2xl ml-2 w-[200px] text-sm text-black shadow-lg z-50"
                    side="right"
                    align="start"
                    onInteractOutside={() => setOpenMenu(null)}
                  >
                    <div className="space-y-1 p-2">
                      {subItems.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="px-3 py-2 rounded-md bg-white cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#C8F7EE]"
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                )}
              </Popover>
            );
          })}
        </nav>
      </div>
    </div>
  );
} 
