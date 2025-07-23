// src/app/(sales-finance)/layout.tsx
"use client";

import React from "react";

export default function SalesFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* 🚫 Top navbar has been removed */}
      <main>{children}</main>
    </div>
  );
}
