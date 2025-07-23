"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Banknote,
  LineChart as LineChartIcon,
  PieChart,
  TrendingUp,
  Wallet,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";

/* ─── Recharts dynamic imports ─── */
const ResponsiveContainer = dynamic(
  () => import("recharts").then((m) => m.ResponsiveContainer),
  { ssr: false }
);
const LineChart = dynamic(() => import("recharts").then((m) => m.LineChart), {
  ssr: false,
});
const Line = dynamic(() => import("recharts").then((m) => m.Line), {
  ssr: false,
});
const XAxis = dynamic(() => import("recharts").then((m) => m.XAxis), {
  ssr: false,
});
const YAxis = dynamic(() => import("recharts").then((m) => m.YAxis), {
  ssr: false,
});
const Tooltip = dynamic(() => import("recharts").then((m) => m.Tooltip), {
  ssr: false,
});
const CartesianGrid = dynamic(
  () => import("recharts").then((m) => m.CartesianGrid),
  { ssr: false }
);
const PieChartComp = dynamic(() => import("recharts").then((m) => m.PieChart), {
  ssr: false,
});
const Pie = dynamic(() => import("recharts").then((m) => m.Pie), {
  ssr: false,
});
const Cell = dynamic(() => import("recharts").then((m) => m.Cell), {
  ssr: false,
});

/* ─── Demo Data ─── */
const salesData = [
  { month: "Jan", sales: 80000 },
  { month: "Feb", sales: 95000 },
  { month: "Mar", sales: 105000 },
  { month: "Apr", sales: 98000 },
  { month: "May", sales: 112000 },
  { month: "Jun", sales: 120000 },
];
const expenseData = [
  { name: "Marketing", value: 35000 },
  { name: "Operations", value: 42000 },
  { name: "HR", value: 18000 },
  { name: "Misc", value: 8000 },
];

const COLORS = ["#F5793B", "#F58B4D", "#F5A36A", "#F5BB87"]; // Optional slice variations

export default function SalesFinancePage() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Workspace", path: "/sales&finance/workspace" },
    { label: "Reports", path: "/sales&finance/reports" },
    { label: "Analytics", path: "/sales&finance/analytics" },
  ];

  return (
    <div className="p-6 bg-white space-y-8 text-gray-800">
      {/* ── Page Title + Navigation Links ── */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#F5793B]">Sales and Finance</h1>
        <div className="flex gap-2 bg-white shadow rounded-xl p-1">
          {navLinks.map(({ label, path }) => {
            const active = pathname === path;
            return (
              <Link
                key={label}
                href={path}
                className={`text-sm px-4 py-2 rounded-xl transition ${
                  active
                    ? "bg-[#F5793B] text-white"
                    : "text-gray-700 hover:bg-[#f58b4d] hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Sales", value: "Rs. 1,230,000", icon: <TrendingUp className="w-5 h-5 text-white" /> },
          { label: "Total Expenses", value: "Rs. 870,000", icon: <Wallet className="w-5 h-5 text-white" /> },
          { label: "Net Profit", value: "Rs. 360,000", icon: <Banknote className="w-5 h-5 text-white" /> },
          { label: "Goal Progress", value: "75%", icon: <PieChart className="w-5 h-5 text-white" /> },
        ].map(({ label, value, icon }) => (
          <Card key={label} className="bg-[#F5793B] text-white p-4 rounded-2xl shadow">
            <CardHeader className="flex items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{label}</CardTitle>
              {icon}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── Charts Section ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Line Chart ── */}
        <Card className="lg:col-span-2 bg-white p-4 rounded-2xl shadow">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold">Sales Trends</CardTitle>
            <LineChartIcon className="w-5 h-5 text-[#F5793B]" />
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#F5793B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* ── Pie Chart ── */}
        <Card className="bg-white p-4 rounded-2xl shadow">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold">Expense Breakdown</CardTitle>
            <PieChart className="w-5 h-5 text-[#F5793B]" />
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChartComp>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  innerRadius={40}
                  paddingAngle={5}
                  fill="#F5793B"
                >
                  {expenseData.map((_, idx) => (
                    <Cell key={idx} fill="#F5793B" />
                    // Or: <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChartComp>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
