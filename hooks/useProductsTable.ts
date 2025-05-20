import { useCallback, useEffect, useState } from "react";
import { useRowSelection } from "./useRowSelection";

import { TableToolsType } from "@/types";
import { ProductsTableDataType, restoreProductsTableData } from "@/lib";
import { _getManyProducts } from "@/services";

export function useProductsTable() {
  const [dataSource, setDataSource] = useState<ProductsTableDataType[]>([]);
  const [loading, setLoading] = useState(true);

  const rowSelection = useRowSelection<ProductsTableDataType>();

  const [createAdToolLoading, setCreateAdToolLoading] = useState(false);
  const [deleteAdToolLoading, setDeleteAdToolLoading] = useState(false);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const responseData = await _getManyProducts();
      const restoredResponseData = restoreProductsTableData(responseData);
      setDataSource(restoredResponseData);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const createAdToolAction = useCallback(async () => {
    setCreateAdToolLoading(true);
    setTimeout(() => {
      setCreateAdToolLoading(false);
    }, 1000);
  }, []);

  const deleteAdToolAction = useCallback(async () => {
    setDeleteAdToolLoading(true);
    setTimeout(() => {
      setDeleteAdToolLoading(false);
    }, 1000);
  }, []);

  const tableTools: TableToolsType = [
    {
      title: "Обновить",
      action: loadData,
      loading: loading,
    },
    {
      title: "Создать объявление",
      action: createAdToolAction,
      loading: createAdToolLoading,
      disabled: rowSelection.selectedRowKeys?.length === 0,
    },
    {
      title: "Удалить объявление",
      action: deleteAdToolAction,
      loading: deleteAdToolLoading,
      disabled: rowSelection.selectedRowKeys?.length === 0,
    },
  ];

  useEffect(() => {
    loadData();
  }, []);

  return [tableTools, loading, dataSource, rowSelection] as const;
}
