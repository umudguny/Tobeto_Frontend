export interface Student {
  id: string;
  departmentId: string;
  userId: string;
}

export interface getAllStudentResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Student[];
  hasPrevious: boolean;
  hasNext: boolean;
}
