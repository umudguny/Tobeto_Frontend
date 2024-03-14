export interface Category {
  id: string;
  name: string;
}
export interface getAllCategoryResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Category[];
  hasPrevious: boolean;
  hasNext: boolean;
}
