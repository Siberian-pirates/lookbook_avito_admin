import { ProductsImageCell, ProductsInfoCell } from "@/components";
import { RestoredGetManyProductsResponseDTO } from "@/services";
import { TableColumnsType } from "antd";
import { JSX } from "react";

export interface ProductsTableDataType {
  key: React.Key;
  image: JSX.Element;
  product: JSX.Element;
  categories: string;
  product_id: string;
  product_code: string;
  amount: string;
  status: string;
}

export const productsTableColumns: TableColumnsType<ProductsTableDataType> = [
  { title: "1", dataIndex: "image" },
  { title: "Продукт", dataIndex: "product", sorter: true },
  { title: "Категории", dataIndex: "categories", sorter: true },
  { title: "Кол-во", dataIndex: "amount", sorter: true },
  { title: "Статус", dataIndex: "status", sorter: true },
  { title: "ID", dataIndex: "product_id", sorter: true },
];

export const restoreProductsTableData: (
  data: RestoredGetManyProductsResponseDTO[]
) => ProductsTableDataType[] = (data) => {
  return data.map((item) => {
    return {
      key: item.product_id,
      image: <ProductsImageCell src={item.image.url} />,
      product: (
        <ProductsInfoCell
          title={item.product}
          product_url={item.url}
          company={item.company}
          product_code={item.product_code}
        />
      ),
      categories: item.categories.join(", "),
      product_id: item.product_id,
      product_code: item.product_code,
      amount: item.amount,
      status: item.status,
    };
  });
};
