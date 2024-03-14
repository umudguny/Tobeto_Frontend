export interface AsyncCourse {
  id:string;
  categoryId: string;
  name: string;
  createdDate:Date;
}

export interface getAllAsyncCourseResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: AsyncCourse[];
  hasPrevious: boolean;
  hasNext: boolean;
}
