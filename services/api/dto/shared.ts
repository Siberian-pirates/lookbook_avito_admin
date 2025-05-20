export type SortVariantsType = "asc" | "desc";

export interface DefaultManyRequestDTO<OB extends string | undefined = undefined> {
  page?: number;
  items_per_page?: number;
  sort?: SortVariantsType;
  order_by?: OB;
}
