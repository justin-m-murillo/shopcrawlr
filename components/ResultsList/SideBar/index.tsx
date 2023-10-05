import Link from 'next/link'
import React from 'react'
import { sideBarStyles } from '../styles'
import { ResultsListProps } from '..'
import getRandomSkeleCount from '@/utils/getRandomSkeleCount'

type SideBarProps = Omit<ResultsListProps, 'term'>;

const SideBar = ({ results }: SideBarProps) => {
  return (
    <div className={sideBarStyles.sidebar}>
      {/** each page */}
      {results?.map((pageResults, index) => (
        <div key={index} className={sideBarStyles.page_res_container}>
          {pageResults.content.results.filters?.map((filter: any, index: number) => (
            <div key={index} className={sideBarStyles.filter_container}>
              <p className={sideBarStyles.filter_name}>{filter.name}</p>
              <div className={sideBarStyles.filter_opt_wrapper}>
                {filter.values.map((value: any, index: number) => (
                  <Link
                    key={index}
                    prefetch={false} 
                    href={`https://www.google.com/${value.url}`}
                  >
                    {value.value}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SideBar