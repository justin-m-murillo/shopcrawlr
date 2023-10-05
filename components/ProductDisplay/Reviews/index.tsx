import React from 'react'
import { displayStyles, reviewsStyles } from '../styles';
import StarRating from '../StarRating';

type ReviewsProps = {
  reviews: {
    rating: number;
    top_review: {
        text: string;
        title: string;
        rating: number;
        author: string;
        source: string;
    };
    rating_stars: number;
    reviews_count: number;
    reviews_by_stars: {};
  }
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <>
      {reviews ? (
        <>
          <h3 className={displayStyles.section_title}>
            Reviews ({reviews.rating})
          </h3>

          <h4 className={reviewsStyles.reviews_subtitle}>Top Review</h4>
          {reviews.top_review && (
            <div className={reviewsStyles.reviews_top_container}>
              <div className={reviewsStyles.reviews_top_heading}>
                <p className={reviewsStyles.reviews_top_author}>
                  {reviews.top_review.author} says:
                </p>

                <h5>{reviews.top_review.title}</h5>
              </div>
              <div className='mb-8'>
                <StarRating rating={reviews.top_review.rating} />
              </div>

              <p>"{reviews.top_review.text}"</p>
            </div>
          )}
        </>
      ) : (
        <div>
          <h3 className={displayStyles.section_title}>Reviews</h3>
          <h4 className={reviewsStyles.reviews_subtitle}>No Reviews yet</h4>
        </div>
      )}
    </>
  )
}

export default Reviews