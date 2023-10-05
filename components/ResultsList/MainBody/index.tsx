import { PageResult } from '@/types'
import React from 'react'
import { ResultsListProps } from '..'
import { mainBodyStyles } from '../styles'
import Link from 'next/link'


const MainBody = ({ results, term }: ResultsListProps) => {
  return (
    <div className={mainBodyStyles.main_body_root}>
      {results.map((pageResult, index) => (
        <div key={index} className={mainBodyStyles.page_res_container}>
          {index !== 0 && <hr className={mainBodyStyles.horizontal_line} />}  
          
          <div className={mainBodyStyles.page}>
            <div className={mainBodyStyles.page_header}>
              <h1>Shop on Google</h1>
              <h2 className={mainBodyStyles.page_index}>
                Search Results for Page {index + 1}
              </h2>
            </div>

            <h3 className={mainBodyStyles.term}>
              Showing results for "{decodeURIComponent(term)}"
            </h3>
          </div>
          
          {pageResult?.content?.results?.organic?.map((item:any) => (  
            <Link  
              href={item.url.includes('url?url=') 
                // send to external URL
                ? item.url.split("url?url=")?.[1]
                // remove any query params and send to Google Shopping page
                : item.url.split("?")?.[0]
              }
              key={item.pos} 
              prefetch={false}
              className={`${mainBodyStyles.organic_link} ${item.url.includes("url?url=") && 'italic'}`}
            >
              <div className={mainBodyStyles.organic_title_wrapper}>
                <p className={mainBodyStyles.organic_title}>{item.title}</p>
              </div>
              <div className={mainBodyStyles.organic_price_wrapper}>
                <p className={mainBodyStyles.organic_price}>{item.price_str}</p>
                <p className={mainBodyStyles.organic_merchant}>{item.merchant.name}</p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MainBody