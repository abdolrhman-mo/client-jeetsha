'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

const fetchedOrders: OrderType[] = [
    {
      "id": 1,
      "created_at": "2024-08-26T14:25:00Z",
      "address": "123 Elm Street, Springfield",
      "status": "pending",
      "order_items": [
        {
          "id": 1,
          "product": {
            "name": "Widget A",
            "image": "/images/widget-a.jpg",
            "price": 19.99
          },
          "quantity": 2
        },
        {
          "id": 2,
          "product": {
            "name": "Widget B",
            "image": "/images/widget-b.jpg",
            "price": 29.99
          },
          "quantity": 1
        }
      ]
    },
    {
      "id": 2,
      "created_at": "2024-08-25T11:00:00Z",
      "address": "456 Oak Avenue, Springfield",
      "status": "delivered",
      "order_items": [
        {
          "id": 3,
          "product": {
            "name": "Widget C",
            "image": "/images/widget-c.jpg",
            "price": 39.99
          },
          "quantity": 1
        }
      ]
    },
    {
      "id": 3,
      "created_at": "2024-08-24T09:30:00Z",
      "address": "789 Pine Road, Springfield",
      "status": "pending",
      "order_items": [
        {
          "id": 4,
          "product": {
            "name": "Widget D",
            "image": "/images/widget-d.jpg",
            "price": 49.99
          },
          "quantity": 3
        }
      ]
    }
  ]
  
  // app/lib/types.ts
export interface OrderItemType {
    id: number;
    product: {
      name: string;
      image: string;
      price: number;
    };
    quantity: number;
  }
  
  export interface OrderType {
    id: number;
    created_at: string;
    address: string;
    status: 'pending' | 'delivered';
    order_items: OrderItemType[];
  }
  

// const fetchedOrders: OrderType[] = [
//   // Sample data as provided
// ];

// app/lib/utils.ts
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short' // Optional: adds time zone abbreviation (e.g., PDT)
    }).format(date);
}


function Order({ order, state }: { order: OrderType; state: string }) {
  return (
    <div className="grid grid-cols-6 gap-4 py-4 border-b">
      <p className="text-gray-600">{formatDate(order.created_at)}</p>
      <p className="text-gray-600">{order.id}</p>
      {/* <p className="text-gray-600">{order.customer.name}</p> */}
      <p className={state === "delivered" ? "text-green-500" : "text-yellow-500"}>{state}</p>
      {/* <p className="text-gray-600">{order.total} EGP</p> */}
      <Link href={`/orders/${order.id}`} className="text-blue-500 hover:underline">View Details</Link>
    </div>
  );
}

export default function Page() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Simulate fetching data
        setOrders(fetchedOrders);
      } catch (error) {
        setError("Failed to fetch orders");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="text-center py-6">Loading orders...</p>;
  }

  if (error) {
    return <p className="text-center py-6 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            {/* Placeholder for filtering/sorting options */}
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Filter</button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Sort</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="grid grid-cols-6 gap-4 border-b pb-2 font-semibold text-gray-700">
            <p>Date</p>
            <p>Order ID</p>
            <p>Customer</p>
            <p>Status</p>
            <p>Total</p>
            <p>Actions</p>
          </div>
          {orders.length === 0 ? (
            <p className="text-center py-6 text-gray-500">No orders found.</p>
          ) : (
            orders.map((order) => (
              <Order key={order.id} order={order} state={order.status} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
