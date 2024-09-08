export default function OrdersSummary({
  totalOrders,
  pendingOrders,
  deliveredOrders,
  revenue,
}: {
  totalOrders: number
  pendingOrders: number 
  deliveredOrders: number 
  revenue: number
}) {
  return (
    <div className="bg-gray-100 p-4 mb-6 rounded">
      <h3 className="text-lg font-semibold">Orders Summary</h3>
      <div className="flex justify-between flex-col md:flex-row">
        <div>Total Orders: {totalOrders}</div>
        <div>Pending Orders: {pendingOrders}</div>
        <div>Delivered Orders: {deliveredOrders}</div>
        <div>Total Revenue: {revenue} EGP</div>
      </div>
    </div>
  )
}