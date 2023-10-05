import React from 'react'
import { getFetchUrl } from '@/utils/getFetchUrl';
import { notFound } from 'next/navigation';
import { ProductData } from '@/types';
import ProductDisplay from '@/components/ProductDisplay';

export const revalidate = 300;

type ProductPageProps = {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const response = await fetch(getFetchUrl(`api/shopping/product/${id}`));
  const productData = (await response.json()) as ProductData;

  if (!productData.content.pricing) {
    notFound()
  }

  return (
    <ProductDisplay productData={productData} />
  )
}

export default ProductPage