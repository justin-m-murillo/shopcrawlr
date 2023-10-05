import React from 'react'
import { imagesStyles } from '../styles'

type ImagesDisplayProps = {
  images: {
    full_size: string[];
    thumbnail: string[];
  }
}

const Images = ({ images }: ImagesDisplayProps) => {
  return (
    <div className={imagesStyles.product_img_container}>
      <div className={imagesStyles.product_img_wrapper}>
        <img 
          src={images?.full_size[0]} 
          alt="" 
          className={imagesStyles.product_img}
        />
        <div className={imagesStyles.product_img_sec_wrapper}>
          {images?.full_size
            .slice(1,3)
            .map((img, index) => (
              <img
                key={index} 
                src={img}
                alt=""
                className={imagesStyles.product_img_sec}
              />
            )
          )}
        </div>
      </div>

      <div className={imagesStyles.product_img_ter_wrapper}>
        {images?.full_size.slice(3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={imagesStyles.product_img_ter}
          />
        ))}
      </div>
    </div>
  )
}

export default Images