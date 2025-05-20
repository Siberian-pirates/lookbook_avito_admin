import {
  axiosInstance,
  ApiRoutes,
  GetManyProductsResponseDTO,
  RestoredGetManyProductsResponseDTO,
} from "@/services";
import { imageDostavator } from "@/utils";

export const _getManyProducts = async () => {
  const responseData = (
    await axiosInstance.get<GetManyProductsResponseDTO[]>(ApiRoutes.PRODUCTS)
  ).data;

  const restoredResponseData: RestoredGetManyProductsResponseDTO[] = responseData.map(
    (item) => ({
      product_id: item.product_id,
      product: item.product,
      product_code: item.product_code,
      company: item.company,
      categories: item.categories,
      image: imageDostavator(item.images),
      url: item.url,
      amount: item.amount,
      status: item.status,
    })
  );

  return restoredResponseData;
};
