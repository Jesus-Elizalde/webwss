import { FilteredProduct } from "~/types";

export const getImageUrlFromProduct = (product: FilteredProduct) => {
  const variantsIdx = Math.floor(Math.random() * product.variants.length);
  const imageIdx = 0;

  return product.variants[variantsIdx]?.images[imageIdx]?.url;
};
