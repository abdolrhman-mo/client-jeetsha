'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';

export default function Search({ 
  placeholder,
  onShowSearch,
}: { 
  placeholder: string
  onShowSearch?: any 
}) {
  return (
    <div className={clsx(
        'relative grid grid-cols-12 w-full',
        // Spacing
        'py-2', 
      )}
    >
      {/* <label htmlFor='search' className='sr-only'>
        Search
      </label> */}
      <MagnifyingGlassIcon 
        className={clsx(
          // Sizing
          'h-6',
          // Grid
          'col-span-1',
          'text-gray-500 peer-focus:text-gray-900',
        )}
      />
      <input
        className={clsx(
          // Layout & Sizing
          'peer block w-full',
          // Grid
          'col-span-10',
          // Borders
          'rounded-md border-none',
          // Spacing
          'py-0',
          // Typography 
          'text-sm placeholder:text-gray-500',
        )}
        placeholder={placeholder}
      />
      <XMarkIcon
        className='h-6 col-span-1 cursor-pointer'
        onClick={onShowSearch}
      />
    </div>
  );
}
