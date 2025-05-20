import { ProductImages } from "@/services";

export function imageDostavator(images: ProductImages | ProductImages[]) {
  const imagesArray = Array.isArray(images) ? images : [images];
  return imagesArray.find((img) => img.is_main) || imagesArray[0];
}
