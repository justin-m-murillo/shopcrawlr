export type SearchParams = {
  pages?: string;
  sortBy: string;
  minPrice?: string;
  maxPrice?: string;
};

type APIResult = {
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export type PageResult = APIResult & {
  content: Content;
};

export type ProductData = APIResult & {
  content: ProductContent;
}

export type Content = {
  url: string;
  page: number;
  results: Results;
  last_visible_page: number;
  parse_status_code: number;
};

export type ProductContent = {
  url: string;
  title: string;
  description: string;
  images: {
    full_size: string[];
    thumbnail: string[];
  };
  highlights?: string[];
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
    reviews_by_stars: {
      [starRating]: {
        url: string;
        reviews_count: number;
      };
    };
  };
  pricing: {
    online: [
      {
        price: number;
        seller: string;
        details: string;
        currency: string;
        condition: string;
        price_tax: number;
        price_total: number;
        seller_link: string;
        price_shipping: number;
      }
    ];
  };
  specifications: [
    {
      items: [
        {
          title: string;
          value: string;
        }
      ];
      section_title: string;
    }
  ];
};

export type Results = {
  paid: any[];
  filters: Filter[];
  organic: Organic[];
  search_information: {
    query: string;
    showing_results_for: number;
  };
};

export type Filter = {
  name: string;
  values: Value[];
};

export type Value = {
  url: string;
  value: string;
};

export type Organic = {
  pos: number;
  url: string;
  type: string;
  price: number;
  title: string;
  currency: string;
  merchant: {
    url: string;
    name: string;
  };
  price_str: string;
  pos_overall: number;
};