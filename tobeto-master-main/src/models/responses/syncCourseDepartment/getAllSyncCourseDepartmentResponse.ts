export interface SyncCourseDepartment {
  id: string;
  departmentId: string;
  syncCourseId: string;
  startedDate: string;
  endedDate: string;
}export interface getAllSyncCourseDepartmentResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: SyncCourseDepartment[];
  hasPrevious: boolean;
  hasNext: boolean;
}
