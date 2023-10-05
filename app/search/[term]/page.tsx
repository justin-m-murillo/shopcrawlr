import ResultsList from '@/components/ResultsList';
import { PageResult, SearchParams } from '@/types';
import { getFetchUrl } from '@/utils/getFetchUrl';
import { redirect } from 'next/navigation';
import React from 'react'

export const revalidate = 60;

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
  const response = await fetch(getFetchUrl('api/search'), {
    method: 'POST',
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  });

  const results = await response.json() as PageResult[];

  return (
    <div>
      {/** Results list */}
      <ResultsList results={results} term={term} />
    </div>
  )
}

export default SearchPage