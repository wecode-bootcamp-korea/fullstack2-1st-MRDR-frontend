export const priceCaculator = items => {
  if (!items || !items.length) return;
  let originPrice = 0;
  let discountPrice = 0;

  for (let item of items) {
    originPrice += item.price;
    discountPrice += item.price * item.sale;
  }
  return { originPrice, discountPrice };
};

export const priceChanger = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
