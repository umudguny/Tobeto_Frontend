export interface District {
  id: string;
  cityId: string;
  name: string;
}

export interface getAllDistrictResponse<T> {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: T[];
  hasPrevious: boolean;
  hasNext: boolean;
}
