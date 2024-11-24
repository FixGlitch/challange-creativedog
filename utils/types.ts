export interface ChildCategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  childCategories: ChildCategory[];
}

export interface ChildProduct {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export type SortOption = "priceAsc" | "priceDesc" | "nameAsc" | "nameDesc";
