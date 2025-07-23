// components/Header.tsx
"use client";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type HeaderProps = {
  onToggle: () => void;
};

export default function Header({ onToggle }: HeaderProps) {
  return (
    <header className="bg-[#C8F7EE] text-black px-4 py-2 flex items-center justify-between rounded-2xl shadow-md mx-4 mt-4">
      <div className="flex items-center space-x-3">
        <button
          onClick={onToggle}
          className="p-1.5 hover:bg-[#a8e2d8] rounded-full transition"
          title="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-base font-semibold">Dashboard</h1>
          <p className="text-xs">Welcome back to Lagrify ERP</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-[#268c7b] font-semibold text-sm">User</span>
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="User" />
          <AvatarFallback className="bg-[#49c5b6] text-white">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
