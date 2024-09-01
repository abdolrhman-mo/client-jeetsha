'use client';

import { XMarkIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

import { useDispatch } from 'react-redux'
import { toggleSearchBar } from '@/redux/features/nav/searchBarSlice'
import { Suspense } from 'react';
import { NavSearchResultsSkeleton } from '@/app/ui/common/skeletons';

export default function Search({
  placeholder,
}: { 
  placeholder?: string
}) {
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();

  let handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  const dispatch = useDispatch()

  return (
    <Suspense fallback={<NavSearchResultsSkeleton />}>
      <div className={clsx(
        'relative grid grid-cols-12 w-full',
        // Spacing
        'py-2', 
      )}
      >
        <MagnifyingGlassIcon 
          className={clsx(
            // Sizing
            'h-6',
            // Grid
            'col-span-1',
            // Typography
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
          onChange={e => {
            handleSearch(e.target.value)
          }}
          placeholder={placeholder}
          defaultValue={searchParams.get('query')?.toString()}
          />
        <XMarkIcon
          className='h-6 col-span-1 cursor-pointer'
          onClick={() => dispatch(toggleSearchBar())}
          />
      </div>
    </Suspense>
  );
}
