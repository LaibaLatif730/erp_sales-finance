
"use client";

export default function AnalyticsPage() {
  const cardClasses =
    "bg-white rounded-xl shadow p-4 h-36 transition duration-300 hover:bg-[#F5793B] border border-[#F5793B]";

  const textClass = "text-sm transition duration-300 group-hover:text-white";

  return (
    <div className="p-6 space-y-6 text-gray-800">
      <h1 className="text-2xl font-bold text-[#F5793B]">Sales & Finance — Analytics</h1>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Highest Sales Month</h3>
          <p className={textClass}>March 2025 — Rs. 2,40,000</p>
        </div>
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Lowest Sales Month</h3>
          <p className={textClass}>July 2025 — Rs. 98,000</p>
        </div>
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Top Performing Product</h3>
          <p className={textClass}>Steel Rods — Rs. 4,80,000</p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Top Customer</h3>
          <p className={textClass}>Alpha Traders — Rs. 3,20,000</p>
        </div>
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Repeat Purchase Rate</h3>
          <p className={textClass}>61% — High Loyalty</p>
        </div>
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Category-wise Expenses</h3>
          <p className={textClass}>Marketing: 32%, Ops: 29%, HR: 21%, Misc: 18%</p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Avg. Order Value (AOV)</h3>
          <p className={textClass}>Rs. 6,700</p>
        </div>
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Outstanding Receivables</h3>
          <p className={textClass}>Rs. 78,000 — 12 invoices pending</p>
        </div>
        <div className={`${cardClasses} group`}>
          <h3 className="text-[#F5793B] font-semibold text-sm mb-2">Profit Margin (YoY)</h3>
          <p className={textClass}>+8.3% compared to last year</p>
        </div>
      </div>
    </div>
  );
}
