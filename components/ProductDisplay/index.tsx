import { ProductData } from '@/types'
import { displayStyles } from './styles'
import React from 'react'
import StarRating from './StarRating';
import Images from './Images';
import Pricing from './Pricing';
import DetailsWrapper from './DetailsWrapper';
import Description from './Description';
import Highlights from './Highlights';
import Reviews from './Reviews';
import Specifications from './Specifications';

type ProductDisplayProps = {
  productData: ProductData;
}

const ProductDisplay = ({ productData }: ProductDisplayProps) => {
  const { reviews, images, pricing, description, highlights, specifications } = productData.content;

  return (
    <div className={displayStyles.productDisplay}>
      <h1 className={displayStyles.productTitle}>
        {productData.content.title}
      </h1>

      {reviews && (
        <div className={displayStyles.review_container}>
          <StarRating rating={reviews.rating} useLight />
        </div>
      )}

      <section className={displayStyles.section_root}>
        <Images images={images} />
        <DetailsWrapper>
          <Pricing pricing={pricing} />
          <Description description={description} />
          <Highlights highlights={highlights} />
        </DetailsWrapper>
      </section>
     
      {reviews && (
        <section>
          <hr className={displayStyles.display_horiz} />
          <Reviews reviews={reviews} />
        </section>
      )}

      {specifications && (
        <section>
          <hr className={displayStyles.display_horiz} />
          <Specifications specifications={specifications} />
        </section>
      )}
      
    </div>
  )
}

export default ProductDisplay