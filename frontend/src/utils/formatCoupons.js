import { coupons } from "../mocks/data/coupons"; 

export const formatCoupons = (orderCoupons) => {
  if (!orderCoupons || orderCoupons.length === 0) return "No Coupons Applied";

  return orderCoupons
    .map((coupon) => {
      const foundCoupon = coupons.find((c) => c.id === coupon.id);
      return foundCoupon ? `${foundCoupon.name} - ${foundCoupon.information}` : null;
    })
    .filter(Boolean)
    .join(", ");
};
