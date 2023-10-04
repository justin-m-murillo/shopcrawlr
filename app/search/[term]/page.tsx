import { PageResult, SearchParams } from '@/types';
import { getFetchUrl } from '@/utils/getFetchUrl';
import { redirect } from 'next/navigation';
import React from 'react'

type SearchPageProps = {
  searchParams: SearchParams;
  params: {
    term: string;
  }
}

const SearchPage = async ({ searchParams, params: { term } }: SearchPageProps) => {
  if (!term) {
    redirect('/');
  }

  // fetch from API...
  console.log('SEARCH PAGE: fetching from api/search');
  const response = await fetch(getFetchUrl('api/search'), {
    method: 'POST',
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  });
  console.log('SEARCH PAGE: fetch complete');
  console.log('SEARCH PAGE: Response:', response);

  console.log('SEARCH PAGE: jsonify response as page result list');
  const results = await response.json() as PageResult[];
  console.log(results);

  return (
    <div>
      {/** Results list */}
      Welcome to SearchPage
    </div>
  )
}

export default SearchPage