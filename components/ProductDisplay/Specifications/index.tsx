import React from 'react'
import { displayStyles, specStyles } from '../styles'

type SpecificationsProps = {
  specifications: [{
    items: [{
        title: string;
        value: string;
    }];
    section_title: string;
  }]
}

const Specifications = ({ specifications }: SpecificationsProps) => {
  return (
    <>
      <h3 className={displayStyles.section_title}>Specifications</h3>
      <div className={specStyles.spec_container}>
        {specifications.map((spec) => (
          <div key={spec.section_title}>
            <h4 className={specStyles.spec_title}>
              {spec.section_title}
            </h4>

            {spec.items.map((item) => (
              <div key={item.title} className={specStyles.spec_item_wrapper}>
                <h5 className={specStyles.spec_item_title}>{item.title}</h5>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Specifications