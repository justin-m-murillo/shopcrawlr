import React from 'react'
import { descStyles } from '../styles'

type DescriptionProps = {
  description: string
}

const Description = ({ description }: DescriptionProps) => {
  return (
    <>
      <hr className={descStyles.pricing_horiz} />
      <p>
        {description}
      </p>
    </>
  )
}

export default Description