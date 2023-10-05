import React from 'react'
import { displayStyles, highlightsStyles } from '../styles';

type HighlightProps = {
  highlights: string[] | undefined;
}

const Highlights = ({ highlights }: HighlightProps) => {
  return (
    <>
      {highlights && 
        <div className={highlightsStyles.highlights_container}>
          <h3 className={displayStyles.section_title}>Product Highlights</h3>
          <hr />
          <ul className={highlightsStyles.highlights_list}>
            {highlights?.map((highlight, index) => (
              <li key={index} className={highlightsStyles.highlights_list_item}>{highlight}</li>
            ))}
          </ul>
        </div>
      }
    </>
  )
}

export default Highlights