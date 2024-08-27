'use client'

import CustomLink from '@/app/ui/common/custom-link';
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
        <h1 className="text-3xl font-bold mb-4">
          Order Confirmed!
        </h1>
        <p className="text-lg mb-6">Thank you for your purchase.</p>
        <p className="text-gray-700 mb-2">
          Your order number is: <span className="font-bold">{orderId}</span>
        </p>
        <p className="text-gray-500">
          You will receive a confirmation email with your order details.
        </p>
        <br />
        <CustomLink href='/'>Back to home</CustomLink>
      </div>
    </div>
  );
}
