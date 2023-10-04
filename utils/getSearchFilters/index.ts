
export const getPagesFilter = () => [...Array(100)].map((_, i) => {
  const suffix = i+1 > 1 ? 'pages' : 'page'
  return {
    label: `${i + 1} ${suffix}`,
    value: (i + 1).toString()
  };
});

export const getSortFilter = () => (
  {
    r: 'Default',
    rv: 'By Review',
    p: 'By Price (low to high)',
    pd: 'By Price (high to low)',
  }
);

export const getMinPriceFilter = () => ['', '100', '250', '500', '750', '900', '1000'].map((_, i) => (
  {
    label: i === 0 ? 'No Minimum' : `$${_.toString()}`,
    value: `${_.toString()}`
  }
));

export const getMaxPriceFilter = () => ['', '100', '250', '500', '750', '900', '1000+'].map((_, i) => (
  {
    label: i === 0 ? 'No Maximum' : `$${_.toString()}`,
    value: `${_.toString()}`
  }
));