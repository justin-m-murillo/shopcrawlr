import React from 'react'
import { displayStyles } from '../styles'
import { StarIcon } from '@heroicons/react/24/solid';

type StarRatingProps = {
  rating: number;
  useLight?: boolean;
}

const StarRating = ({ rating, useLight }: StarRatingProps) => {
  return (
    <div className='flex space-x-1'>
      {[
        ...Array.from({
          length: Math.round(rating),
        }),
      ].map((_, index) => (
        <StarIcon key={index} className={`${displayStyles.star} ${displayStyles.starFilled}`} />
      ))}
      {useLight && [
        ...Array.from({
          length: 5 - Math.round(rating),
        }),
      ].map((_, index) => (
        <StarIcon key={index} className={`${displayStyles.star} ${displayStyles.starLight}`} />
      ))}
    </div>
  )
}

export default StarRating