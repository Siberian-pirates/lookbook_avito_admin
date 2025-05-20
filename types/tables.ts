import { TableProps } from "antd";

export type TableRowSelection<T extends object = object> = TableProps<T>["rowSelection"];

export type TableToolsType = {
  title: string;
  action: () => void;
  loading?: boolean;
  disabled?: boolean;
}[];
