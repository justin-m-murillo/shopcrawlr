import { mainBodyStyles, resultsListStyles, sideBarStyles } from '@/components/ResultsList/styles'
import getRandomSkeleCount from '@/utils/getRandomSkeleCount'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const LoadingPage = () => {
  
  return (
    <div className={resultsListStyles.results_list_root}>
      {/** Sidebar */}
      <div className={sideBarStyles.sidebar}>
        {[...Array(4)].map((_, index) => (
          <div className={sideBarStyles.filter_container}>
            <h1 className={sideBarStyles.filter_name}>
              <Skeleton />
            </h1>
            <Skeleton count={getRandomSkeleCount(5)} />
          </div>
        ))}
      </div>

      {/** Main body */}
      <div className={mainBodyStyles.main_body_root}>
        <div className={mainBodyStyles.page_res_container}>
          <div className={skeleStyles.heading}>
            <h2>Shopcrawling...</h2>
            <h2 className={skeleStyles.subtitle}>
              Scraping Real Results Via Oxylabs!
            </h2>
          </div>
          
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <Skeleton count={2}/>
              <br />
              <Skeleton count={1} />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default LoadingPage

const skeleStyles = {
  heading: 'md:col-span-2 lg:col-span-3 xl:col-span-4 px-5 pb-2 text-xl font-semibold',
  subtitle: 'font-extralight text-base animate-pulse text-blue-500',
}