
export const getFetchUrl = (route: string) => 
  `${
    process.env.NODE_ENV === 'production'
      ? process.env.VERCEL_URL!
      : process.env.DEV_URL
  }/${route}`;