'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Button from '../common/button'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { fetchTagsAPI } from '@/app/lib/services/productService'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  const [tags, setTags] = useState([])
  useEffect(() => {
    const getTags = async () => {
        const tags = await fetchTagsAPI()
        setTags(tags)
        console.log('tags', tags)
    }
    getTags()
  }, [])

  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={toggleDropdown}
        theme='light'
        className='!py-1'
      >
        Tags
        <ChevronDownIcon className='h-4 inline-block pl-2' />
      </Button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {tags.map(tag => (
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {tag}
                </a>
            ))}
        </div>
      )}
    </div>
  )
}
