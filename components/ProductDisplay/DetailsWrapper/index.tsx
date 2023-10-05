import React, { ReactNode } from 'react'
import { pricingStyles } from '../styles'
import Pricing from '../Pricing'

type DetailsDisplayProps = {
  children: ReactNode;
}

const DetailsWrapper = ({ children }: DetailsDisplayProps) => {
  return (
    <div className={pricingStyles.pricing_container}>
      {children}
    </div>
  )
}

export default DetailsWrapper