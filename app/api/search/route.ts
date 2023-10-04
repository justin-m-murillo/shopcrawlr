import { NextResponse } from 'next/server'
import { PageResult, SearchParams } from '@/types'

export async function POST(request: Request) {
  console.log('Receiving request');
  const { searchTerm, pages, ...params } = await request.json();
  const searchParams: SearchParams = params;
  console.log('Received request, extracted url');

  if (!searchTerm) {
    return NextResponse.next(
      new Response('Missing search term', {
        status: 400,
      })
    );
  }
  console.log('Search term processed');

  const filters: any = [];

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      if (key === 'max_price') {
        if ((value = '1000+')) return;
      }

      filters.push({
        key,
        value: key === 'sortBy' ? value : Number(value)
      });
    }
  });
  console.log('Filters processed');

  console.log('Fetching oxylabs api');
  const response = await fetch('https://reatime.oxylabs.io/v1/queries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(process.env.OXYLABS_USERNAME + ':' + process.env.OXYLABS_PASSWORD
      ).toString('base64')}`,
    },
    cache: 'no-store',
    body: JSON.stringify({
      source: 'google_shopping_search',
      domain: 'com',
      query: searchTerm,
      pages: Number(pages) || 1,
      parse: true,
      context: filters,
    }),
  })
  console.log('Fetch complete');

  console.log('JSONify fetch response');
  const data = await response.json();

  console.log('Inject json data to page results');
  const pageResults: PageResult[] = data.results;

  console.log('Return page results');
  return NextResponse.json(pageResults);
}