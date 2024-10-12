"use client"

import React from 'react'
import {Input} from './input'
import { IoSearchOutline } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export const Search = () => {

  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300)


  return (
    <div className='w-[300px] relative' >
      <Input
        placeholder="Search"
        className="w-full pl-8"
        onChange={(e)=> {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />  
      <IoSearchOutline
        className="absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
       />
    </div>
  )
}

export default Search
