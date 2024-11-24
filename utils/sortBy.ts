import { Product, SortOption } from "./types";

/**
 * @param products
 * @param sortOption
 * @returns
 */

export const sortProducts = (
  products: Product[],
  sortOption: SortOption | ""
): Product[] => {
  const sortedProducts = [...products];

  if (sortOption === "priceAsc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceDesc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "nameAsc") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "nameDesc") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sortedProducts;
};
