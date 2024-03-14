export interface Department {
  id: string;
  name: string;
  description: string;
}
export interface getAllDepartmentResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Department[];
  hasPrevious: boolean;
  hasNext: boolean;
}

