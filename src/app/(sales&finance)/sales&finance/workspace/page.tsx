"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  Wallet,
  TrendingUp,
  Banknote,
  ClipboardList,
  AlertTriangle,
  Download,
  FileBarChart2,
  User,
  Package,
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";

const kpis = [
  { label: "Total Revenue", value: "Rs 1,25,000", icon: TrendingUp },
  { label: "Total Expenses", value: "Rs 88,000", icon: Wallet },
  { label: "Net Profit", value: "Rs 37,000", icon: Banknote },
  { label: "Profit Margin", value: "29.6%", icon: TrendingUp },
];

const alerts = [
  {
    msg: "Payroll due in 4 days",
    icon: AlertTriangle,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    msg: "Marketing budget exceeded 5%",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-800",
  },
];

const recentTx = [
  { id: "INV‑1025", type: "Invoice", amount: "+ Rs 50,000", status: "Paid" },
  { id: "EXP‑209", type: "Purchase", amount: "‑ Rs 30,000", status: "Posted" },
  { id: "PAY‑312", type: "Payment In", amount: "+ Rs 20,000", status: "Received" },
  { id: "EXP‑210", type: "Expense", amount: "‑ Rs 8,000", status: "Logged" },
];

export default function WorkspacePage() {
  return (
    <div className="max-w-[1250px] mx-auto p-4 space-y-6 text-sm">
      {/* Header & Shortcuts */}
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <h1 className="text-xl font-semibold text-[#F5793B]">
          Sales & Finance — Workspace
        </h1>
        <div className="flex flex-wrap gap-2">
          {/* Buttons (All styled the same) */}
          {[
            { label: "Invoice", icon: PlusCircle },
            { label: "Expense", icon: ClipboardList },
            { label: "Report", icon: FileBarChart2 },
            { label: "Ledger", icon: Download },
          ].map(({ label, icon: Icon }) => (
            <Button
              key={label}
              size="sm"
              variant="outline"
              className="border-[#F5793B] text-[#F5793B] hover:bg-[#f58b4d] hover:text-white transition"
            >
              <Icon className="w-4 h-4 mr-1" /> {label}
            </Button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map(({ label, value, icon: Icon }) => (
          <Card
            key={label}
            className="bg-[#F5793B] text-white rounded-xl shadow-sm hover:scale-[1.02] transition"
          >
            <CardHeader className="flex justify-between items-center pb-1">
              <CardTitle className="text-xs font-medium">{label}</CardTitle>
              <Icon className="w-4 h-4" />
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alerts & Recent Transactions (Side by Side with orange hover) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Alerts */}
        <Card className="rounded-xl shadow-sm transition hover:border hover:border-[#F5793B] hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-[#F5793B]">Alerts & Reminders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {alerts.map((a) => (
              <div
                key={a.msg}
                className={`flex items-center gap-2 px-3 py-2 rounded ${a.color} hover:bg-[#f58b4d] hover:text-white transition`}
              >
                <a.icon className="w-4 h-4" />
                <span>{a.msg}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="rounded-xl shadow-sm transition hover:border hover:border-[#F5793B] hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-sm font-semibold text-[#F5793B]">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="text-gray-600">
                <tr>
                  <th className="px-2 py-1 text-left">Ref #</th>
                  <th className="px-2 py-1 text-left">Type</th>
                  <th className="px-2 py-1 text-left">Amount</th>
                  <th className="px-2 py-1 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y text-gray-800">
                {recentTx.map((tx) => (
                  <tr
                    key={tx.id}
                    className="hover:bg-[#f58b4d] hover:text-white transition"
                  >
                    <td className="px-2 py-1">{tx.id}</td>
                    <td className="px-2 py-1">{tx.type}</td>
                    <td className="px-2 py-1">{tx.amount}</td>
                    <td className="px-2 py-1">{tx.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Cards (Below Alerts & Txns) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Top Customer", value: "Alpha Traders", icon: User },
          { title: "Top Product", value: "Steel Rods", icon: Package },
          { title: "Receivables", value: "Rs 45,000", icon: ArrowDownCircle },
          { title: "Payables", value: "Rs 32,000", icon: ArrowUpCircle },
        ].map(({ title, value, icon: Icon }) => (
          <Card
            key={title}
            className="bg-[#F5793B] text-white rounded-xl shadow-sm hover:scale-[1.02] transition"
          >
            <CardHeader className="flex justify-between items-center pb-1">
              <CardTitle className="text-xs font-medium">{title}</CardTitle>
              <Icon className="w-4 h-4" />
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
