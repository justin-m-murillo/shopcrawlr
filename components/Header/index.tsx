'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';
import Avatar from 'react-avatar';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import SearchButton from '../SearchButton';
import SearchSelector from '../subcomponents/SearchSelector';
import Selector from '../subcomponents/Selector';
import { getMaxPriceFilter, getMinPriceFilter, getPagesFilter, getSortFilter } from '@/utils/getSearchFilters';
import styles from './styles';
import shopcrawlr from '../../assets/SHOpC.png'


const PAGES_OPTIONS = getPagesFilter();
const SORT_OPTIONS = getSortFilter();
const MIN_PRICE_OPTIONS = getMinPriceFilter();
const MAX_PRICE_OPTIONS = getMaxPriceFilter();

const Header = () => {
  const [pages, setPages] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('r');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const router = useRouter();

  return (
    <header className={styles.header_root}>
      <Link href='/'>
        <Image 
          src={shopcrawlr}
          alt="logo"
          width={150}
          height={150}
          className={styles.header_image}
        />
      </Link>

      <div className={styles.form_container}>
        {/** FORM */}
        <form action={formData => {
          const searchTerm = formData.get('searchTerm');
          if (!formData.get('searchTerm')) return;
          const params = new URLSearchParams();
          if (pages) params.set('pages', pages.toString());
          if (sortBy) params.set('sort_by', sortBy.toString());
          if (minPrice) params.set('min_price', minPrice.toString());
          if (maxPrice) params.set('max_price', maxPrice.toString());
          router.push(`/search/${searchTerm}?${params.toString()}`)
        }}>
          <div className={styles.search_container}>
            <div className={styles.search_wrapper}>
              <MagnifyingGlassIcon className={styles.magnifying_glass} />
              <input 
                type='text' 
                name='searchTerm' 
                placeholder='Search...' 
                className={styles.input_search} 
              />
            </div>

            {/** SEARCH BUTTON */}
            <SearchButton />
          </div>

          {/** CATEGORIES */}
          <div className={styles.categories_container}>
            <SearchSelector items={PAGES_OPTIONS} placeHolder='# of Pages' setState={setPages} />
            <Selector       items={SORT_OPTIONS} placeHolder='Sort' value={sortBy} onSelect={setSortBy} />
            <SearchSelector items={MIN_PRICE_OPTIONS} placeHolder='Min. Price...' setState={setMinPrice} />
            <SearchSelector items={MAX_PRICE_OPTIONS} placeHolder='Max Price...' setState={setMaxPrice} />
          </div>
        </form>
      </div>

      <div className={styles.avatar_container}>
        {/** AVATAR */}
        <Avatar name='Justin Murillo' round size='50' />
      </div>
    </header>
  )
}

export default Header