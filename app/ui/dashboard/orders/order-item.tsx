import { API_URL } from "@/app/lib/services/api-url"
import Image from "next/image"

export default function OrderItem({
  orderItem,
  state,
}: {
  orderItem: any;
  state: "pending" | "delivered";
}) {
  return (
    <div className="grid grid-cols-2 gap-3 p-3 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <Image
          className="object-cover max-w-[70px] max-h-[70px]"
          src={
            orderItem.product.image.startsWith("http")
              ? orderItem.product.image
              : `${API_URL + orderItem.product.image}`
          }
          width={70}  // Reduced width
          height={70} // Reduced height
          alt={orderItem.product.name}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <p className="capitalize text-sm font-medium pb-1">
            {orderItem.product.name}
          </p>
          <p className="text-xs text-gray-600">
            <span className="font-semibold">Size:</span> Medium {/* Adjust this dynamically */}
          </p>
        </div>
        <div className="flex justify-between items-center pb-1">
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
            <p className="text-xs text-center">{orderItem.quantity || 1}</p>
          </div>
          <p className="text-sm font-medium text-gray-700">{orderItem.product.price} EGP</p>
        </div>
      </div>
    </div>
  );
}
