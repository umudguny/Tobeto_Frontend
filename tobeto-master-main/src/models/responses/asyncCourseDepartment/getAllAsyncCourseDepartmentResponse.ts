export interface AsyncCourse {
  id: string;
  departmentId: string;
  asyncCourseId: string;
  startedDate: string;
  endedDate: string;
}

export interface getAllAsyncCourseDepartmentResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: AsyncCourse[];
  hasPrevious: boolean;
  hasNext: boolean;
}
