import Image from "next/image"

export default function OrderItem({
  orderItem,
}: {
  orderItem: any
}) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <Image
          className="object-cover max-w-[100px] max-h-[100px]"
          src={
            orderItem.product.image.startsWith("http")
              ? orderItem.product.image
              : `${API_URL + orderItem.product.image}`
          }
          width={100}  // Reduced width
          height={100} // Reduced height
          alt={orderItem.product.name}
        />
      </div>
      <div className="flex flex-col justify-between space-y-2">
        <div>
          <p className="capitalize font-medium pb-1">
            {orderItem.product.name}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Size: </span> <span className="uppercase">{orderItem?.size?.size_text}</span> {/* Adjust this dynamically from l to large */}
          </p>
        </div>
        <div className="flex justify-between items-left space-y-2 md:items-center pb-1 flex-col md:flex-row">
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
            Quantity:
            <p className="text-center pl-2">{orderItem.quantity || 1}</p>
          </div>
          <div className="flex">
            Total Price:
            <p className="font-medium text-gray-700 pl-2">{orderItem.product.price * orderItem.quantity} EGP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
