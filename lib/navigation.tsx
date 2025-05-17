import {
  CloudUploadOutlined,
  DropboxOutlined,
  ShoppingOutlined,
  TagOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export const navigationSchema = [
  {
    key: "products",
    icon: <ShoppingOutlined />,
    label: <Link href="/products">Товары магазина</Link>,
  },
  {
    key: "ads",
    icon: <TagOutlined />,
    label: <Link href="/ads">Объявления</Link>,
  },
  {
    key: "publications",
    icon: <CloudUploadOutlined />,
    label: <Link href="/publications">Выгрузки</Link>,
  },
];

export const breadcrumbMap: Record<string, string> = {
  products: "Товары магазина",
  ads: "Объявления",
  publications: "Выгрузки",
};
