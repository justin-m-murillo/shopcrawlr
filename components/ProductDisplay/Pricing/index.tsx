import React from 'react'
import { displayStyles, pricingStyles } from '../styles';

type PricingDisplayProps = {
  pricing: {
    online: [{
        price: number;
        seller: string;
        details: string;
        currency: string;
        condition: string;
        price_tax: number;
        price_total: number;
        seller_link: string;
        price_shipping: number;
    }];
  }
}

const Pricing = ({ pricing }: PricingDisplayProps) => {
  const { online } = pricing;
  const context = online[0];

  return (
    <>
      {context.details && (
        <>
          <h3 className={displayStyles.section_title}>Product Details</h3>
          <p className={pricingStyles.pricing_main}>
            {context.price_total}{" "}
            {context.currency}
          </p>

          <div className={pricingStyles.pricing_other_wrapper}>
            <p className={pricingStyles.pricing_other}>
              ({context.price_total}{" "}
              {context.currency} +{" "}
              {context.price_tax}{" "}
              {context.currency} tax)
            </p>

            {pricing.online.length > 1 && (
              <p className={pricingStyles.pricing_more}>
                + {online.length - 1} more prices
              </p>
            )}
          </div>

          <p className={pricingStyles.pricing_details}>
            {context.details}
          </p>
        </>
      )}
    </>
  )
}

export default Pricing