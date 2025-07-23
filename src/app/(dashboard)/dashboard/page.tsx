"use client";

import { useEffect, useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import html2canvas from "html2canvas";
import {
  Activity,
  PlusCircle,
  UserPlus,
  FileBarChart2,
  Boxes,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const sampleData = {
  "3M": [
    { month: "May", orders: 1200, revenue: 30000 },
    { month: "June", orders: 1500, revenue: 42000 },
    { month: "July", orders: 1800, revenue: 49000 },
  ],
  "6M": [
    { month: "Feb", orders: 900, revenue: 24000 },
    { month: "Mar", orders: 1000, revenue: 26000 },
    { month: "Apr", orders: 1100, revenue: 28000 },
    { month: "May", orders: 1200, revenue: 30000 },
    { month: "June", orders: 1500, revenue: 42000 },
    { month: "July", orders: 1800, revenue: 49000 },
  ],
  "1Y": [
    { month: "Aug", orders: 600, revenue: 18000 },
    { month: "Sep", orders: 700, revenue: 20000 },
    { month: "Oct", orders: 800, revenue: 23000 },
    { month: "Nov", orders: 900, revenue: 25000 },
    { month: "Dec", orders: 950, revenue: 27000 },
    { month: "Jan", orders: 1000, revenue: 30000 },
    { month: "Feb", orders: 900, revenue: 24000 },
    { month: "Mar", orders: 1000, revenue: 26000 },
    { month: "Apr", orders: 1100, revenue: 28000 },
    { month: "May", orders: 1200, revenue: 30000 },
    { month: "June", orders: 1500, revenue: 42000 },
    { month: "July", orders: 1800, revenue: 49000 },
  ],
};

export default function DashboardPage() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [selectedRange, setSelectedRange] = useState<"3M" | "6M" | "1Y">("3M");
  const [data, setData] = useState(sampleData["3M"]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setData(sampleData[selectedRange]);
  }, [selectedRange]);

  const reloadGraph = () => {
    setData([...sampleData[selectedRange]]);
  };

  const downloadChart = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div className="p-6 text-gray-800">
      {/* Welcome */}
      <div className="bg-[#C8F7EE] text-black rounded-[50px] p-8 shadow-lg mb-8 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome to Largify ERP</h1>
          <p className="text-lg">Monitor your business performance with real-time insights and analytics.</p>
        </div>
        <div className="bg-[#A8E2D8] text-black font-mono px-6 py-4 rounded-2xl shadow-inner text-center leading-tight">
          <div className="text-xl">{time}</div>
          <div className="text-sm mt-1">{date}</div>
        </div>
      </div>

      {/* Primary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Revenue", value: "$82,540", change: "+12.5%" },
          { label: "Active Orders", value: "1,245", change: "+3.8%" },
          { label: "Customers", value: "4,890", change: "+7.1%" },
          { label: "Inventory Items", value: "9,350", change: "−1.2%" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#C8F7EE] text-black p-6 rounded-[50px] shadow-lg">
            <h2 className="text-lg font-semibold mb-1">{stat.label}</h2>
            <div className="text-3xl font-bold">{stat.value}</div>
            <p className="text-sm mt-2 text-black/70">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Sales & Order Analytics */}
      <div className={`${isFullscreen ? "fixed inset-0 bg-white z-50 p-10" : ""} rounded-3xl bg-white shadow-md mb-8`}>
        <div className="flex justify-between items-center px-4 pt-4">
          <h3 className="text-xl font-semibold text-[#268c7b]">Sales & Order Analytics</h3>
          <div className="flex gap-2 items-center">
            {["3M", "6M", "1Y"].map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range as "3M" | "6M" | "1Y")}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedRange === range
                    ? "bg-[#A8E2D8] text-black"
                    : "bg-[#C8F7EE] text-black hover:bg-[#A8E2D8]"
                }`}
              >
                {range === "3M" ? "3 Months" : range === "6M" ? "6 Months" : "1 Year"}
              </button>
            ))}
            <button onClick={reloadGraph} className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">⟳ Reload</button>
            <button onClick={() => setIsFullscreen((prev) => !prev)} className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-800">
              {isFullscreen ? "🗕 Minimize" : "⛶ Maximize"}
            </button>
            <button onClick={downloadChart} className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800">⬇ Download</button>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-[350px] p-4" ref={chartRef}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#268c7b" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#0f766e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Total Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-6">
          {[
            { title: "Total Sales", value: "$128,000", change: "+18%" },
            { title: "Total Orders", value: "5,300", change: "+10.2%" },
            { title: "Average Growth", value: "12.4%", change: "+2.1%" },
          ].map((stat) => (
            <div key={stat.title} className="bg-[#C8F7EE] text-black p-6 rounded-[30px] shadow-md">
              <h2 className="text-lg font-semibold mb-1">{stat.title}</h2>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-sm mt-2 text-black/70">{stat.change} from last period</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Activity */}
        <div className="rounded-[50px] shadow-md bg-[#C8F7EE] p-6">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-[#268c7b] font-semibold text-lg">
              <Activity className="h-5 w-5 text-[#268c7b]" />
              Recent Activity
            </div>
            <p className="text-sm text-gray-600">Live updates • 1 item</p>
          </div>
          <Tabs defaultValue="all">
            <TabsList className="bg-[#A8E2D8] text-black mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-700 font-semibold">Low Stock Alert</p>
                <p className="text-sm text-gray-600">Product SKU-789 below minimum threshold</p>
                <p className="text-xs text-gray-400 mt-1">1 hour ago • 12 units left</p>
              </div>
            </TabsContent>
            <TabsContent value="orders">
              <p className="text-sm text-gray-500">No recent orders.</p>
            </TabsContent>
            <TabsContent value="payments">
              <p className="text-sm text-gray-500">No recent payments.</p>
            </TabsContent>
            <TabsContent value="alerts">
              <p className="text-sm text-gray-500">Low Stock Alert shown here.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Quick Actions */}
        <div className="rounded-[50px] shadow-md bg-[#C8F7EE] p-6">
          <h2 className="text-lg font-semibold text-[#268c7b] mb-2">⚡ Quick Actions</h2>
          <p className="text-sm text-gray-600 mb-4">Streamline your workflow</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Create New Order", icon: <PlusCircle className="text-[#0f766e]" />, desc: "Add a new sales order to the system" },
              { label: "Add Customer", icon: <UserPlus className="text-[#0f766e]" />, desc: "Register a new customer profile" },
              { label: "Generate Report", icon: <FileBarChart2 className="text-[#0f766e]" />, desc: "Create comprehensive business reports" },
              { label: "Manage Inventory", icon: <Boxes className="text-[#0f766e]" />, desc: "Update stock levels and inventory" },
            ].map(({ label, icon, desc }) => (
              <div key={label} className="rounded-xl p-4 bg-[#A8E2D8] hover:bg-[#94d6c7] transition">
                <div className="flex items-center gap-3">
                  {icon}
                  <div>
                    <p className="font-medium text-black">{label}</p>
                    <p className="text-xs text-gray-700">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
