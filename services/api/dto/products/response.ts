export interface ProductImages {
  image_id: string;
  url: string;
  is_main: boolean;
}

export interface GetManyProductsResponseDTO {
  product_id: string;
  product: string;
  product_code: string;
  company_id: string;
  company: string;
  price: string;
  list_price: string;
  main_category: number;
  categories: number[];
  description: string;
  images: ProductImages | ProductImages[];
  url: string;
  amount: string;
  status: string;
}

export interface RestoredGetManyProductsResponseDTO {
  product_id: string;
  product: string;
  product_code: string;
  company: string;
  categories: number[];
  image: ProductImages;
  url: string;
  amount: string;
  status: string;
}
