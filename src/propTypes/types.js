import { arrayOf, shape, number, string } from "prop-types";

export const productType = shape({
  id: number,
  name: string,
  color: string,
  category: string,
  price: number,
  quantity: number
});

export const productListType = arrayOf(productType);
