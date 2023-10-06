import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="p-10 pt-0 text-center md:text-left">
      <h1 className='text-3xl font-extralight mb-5'>Welcome to Shopcrawlr</h1>
      <h2 className='mb-5'>Get started by clicking on one of the example search items or use the search bar above!</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5 mt-5'>
        {EXAMPLE_SEARCHES.map((search, index) => (
          <Link
            key={index}
            prefetch={false}
            href={search.url}
            className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}
          >
            {search.term}
          </Link>
        ))}
      </div>
    </div>
  )
}

const EXAMPLE_SEARCHES = [
  {
    term: 'TVs over $500',
    url: '/search/tv?sort_by=r&min_price=500',
    color: 'bg-blue-500',
  },
  {
    term: 'iPhone 15',
    url: '/search/iphone%2015?sort_by=r',
    color: 'bg-red-500',
  },
  {
    term: 'Macbook Pro',
    url: '/search/macbook%20pro',
    color: 'bg-yellow-500',
  },
  {
    term: 'Headphones under $300',
    url: '/search/headphones?sort_by=r&max_price=300',
    color: 'bg-green-500',
  },
  {
    term: 'Gaming Monitors',
    url: '/search/gaming%20monitors?sort_by=r',
    color: 'bg-purple-500',
  },
]
