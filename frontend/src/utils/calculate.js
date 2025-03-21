import { coupons } from '../mocks/data/coupons';

export const calculateDiscountedPrice = (order) => {
  let totalPrice = order.items.reduce((sum, item) => sum + item.price, 0);

  let totalDiscount = 0;
  order.coupons.forEach((coupon) => {
    const foundCoupon = coupons.find((c) => c.id === coupon.id);
    if (foundCoupon) {
      totalDiscount += foundCoupon.discount;
    }
  });

  const discountAmount = (totalPrice * totalDiscount) / 100;
  return totalPrice - discountAmount;
};
