'use client'

import { useSearchParams, useRouter } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get('orderId');

  if (!orderId) {
    // If no orderId is found, redirect to the homepage
    router.push('/');
    return null; // Return null to avoid rendering the component before redirect
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Order Confirmed!
        </h1>
        <p className="text-lg mb-6">Thank you for your purchase.</p>
        <p className="text-gray-700 mb-2">
          Your order number is: <span className="font-bold">{orderId}</span>
        </p>
        <p className="text-gray-500">
          You will receive a confirmation email with your order details.
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
