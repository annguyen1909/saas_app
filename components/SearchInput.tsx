'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';

const SearchInput = () => {

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || '';

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {

    setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === '/companions') {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 1000);
  }, [searchQuery, router, searchParams, pathname]);


  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1'>
      <Image src='/icons/search.svg' alt='search' width={20} height={20} />
      <input type="text" placeholder='Search Companions ...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='outline-none' />
    </div>
  )
}

export default SearchInput