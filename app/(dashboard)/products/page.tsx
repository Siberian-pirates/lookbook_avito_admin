"use client";

import { useProductsTable } from "@/hooks";
import { productsTableColumns, ProductsTableDataType } from "@/lib";

import { TableTools } from "@/components";
import { Flex, Table } from "antd";

export default function ProductsPage() {
  const [tableTools, loading, dataSource, rowSelection] = useProductsTable();

  return (
    <Flex gap="middle" vertical>
      <TableTools items={tableTools} />
      <Table<ProductsTableDataType>
        pagination={{ pageSize: 8, position: ["bottomCenter"] }}
        loading={loading}
        rowSelection={rowSelection}
        columns={productsTableColumns}
        dataSource={dataSource}
      />
    </Flex>
  );
}
