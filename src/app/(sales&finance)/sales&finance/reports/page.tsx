"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  FileSpreadsheet,
} from "lucide-react";

/* ─── Dummy Report Data ─── */
const rowHover = "hover:bg-[#f58b4d] hover:text-white transition";

const salesSummary = [
  { period: "July 2025", orders: 120, revenue: "Rs 1,25,000" },
  { period: "June 2025", orders: 110, revenue: "Rs 1,12,000" },
];

const expenseSummary = [
  { period: "July 2025", expenses: "Rs 88,000" },
  { period: "June 2025", expenses: "Rs 94,000" },
];

const profitLoss = [
  { period: "July 2025", profit: "Rs 37,000", margin: "29.6%" },
  { period: "June 2025", profit: "Rs 18,000", margin: "16.1%" },
];

const cashFlow = [
  { period: "July 2025", inflow: "Rs 1,15,000", outflow: "Rs 88,000" },
];

const receivables = [
  { customer: "Alpha Traders", amount: "Rs 45,000", due: "3 days" },
  { customer: "Beta Stores", amount: "Rs 25,000", due: "1 week" },
];

const payables = [
  { supplier: "Metal Supplies Inc.", amount: "Rs 32,000", due: "5 days" },
];

/* ─── Component ─── */
export default function ReportsPage() {
  return (
    <div className="p-4 space-y-4 text-sm text-gray-800">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <h1 className="text-xl font-bold text-[#F5793B]">Sales & Finance — Reports</h1>
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" className="bg-[#F5793B] hover:bg-[#f58b4d] text-white">
            <FileText className="w-4 h-4 mr-1" /> Export PDF
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-[#F5793B] text-[#F5793B] hover:bg-[#f58b4d] hover:text-white"
          >
            <FileSpreadsheet className="w-4 h-4 mr-1" /> Export Excel
          </Button>
        </div>
      </div>

      {/* Grid 3 x 2 Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Sales Summary */}
        <Card className="bg-white rounded-xl shadow">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-[#F5793B]">Sales Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead className="text-gray-600 text-sm">
                <tr>
                  <th className="py-1">Period</th>
                  <th>Orders</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {salesSummary.map((s) => (
                  <tr key={s.period} className={rowHover}>
                    <td className="py-1">{s.period}</td>
                    <td>{s.orders}</td>
                    <td>{s.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Expense Summary */}
        <Card className="bg-white rounded-xl shadow">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-[#F5793B]">Expense Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead className="text-gray-600 text-sm">
                <tr>
                  <th className="py-1">Period</th>
                  <th>Expenses</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {expenseSummary.map((e) => (
                  <tr key={e.period} className={rowHover}>
                    <td className="py-1">{e.period}</td>
                    <td>{e.expenses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Profit & Loss */}
        <Card className="bg-white rounded-xl shadow">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-[#F5793B]">Profit & Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead className="text-gray-600 text-sm">
                <tr>
                  <th className="py-1">Period</th>
                  <th>Profit</th>
                  <th>Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {profitLoss.map((p) => (
                  <tr key={p.period} className={rowHover}>
                    <td className="py-1">{p.period}</td>
                    <td>{p.profit}</td>
                    <td>{p.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Cash Flow */}
        <Card className="bg-white rounded-xl shadow">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-[#F5793B]">Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead className="text-gray-600 text-sm">
                <tr>
                  <th className="py-1">Period</th>
                  <th>Inflow</th>
                  <th>Outflow</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {cashFlow.map((c) => (
                  <tr key={c.period} className={rowHover}>
                    <td className="py-1">{c.period}</td>
                    <td>{c.inflow}</td>
                    <td>{c.outflow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Receivables */}
        <Card className="bg-white rounded-xl shadow">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-[#F5793B]">Receivables</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead className="text-gray-600 text-sm">
                <tr>
                  <th className="py-1">Customer</th>
                  <th>Amount</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {receivables.map((r) => (
                  <tr key={r.customer} className={rowHover}>
                    <td className="py-1">{r.customer}</td>
                    <td>{r.amount}</td>
                    <td>{r.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Payables */}
        <Card className="bg-white rounded-xl shadow">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-[#F5793B]">Payables</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead className="text-gray-600 text-sm">
                <tr>
                  <th className="py-1">Supplier</th>
                  <th>Amount</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {payables.map((p) => (
                  <tr key={p.supplier} className={rowHover}>
                    <td className="py-1">{p.supplier}</td>
                    <td>{p.amount}</td>
                    <td>{p.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
