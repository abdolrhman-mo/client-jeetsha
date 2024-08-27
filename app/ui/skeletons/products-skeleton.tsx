import clsx from 'clsx';

const shimmer = 'relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm animate-shimmer';

export function ProductSkeleton() {
  return (
    <div className={clsx(shimmer, 'flex flex-col items-center justify-center')}>
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="w-full h-6 bg-gray-200 rounded-md mb-2"></div>
      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
    </div>
  )
}

export function ProductsListSkeleton({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 md:gap-x-8 gap-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}
