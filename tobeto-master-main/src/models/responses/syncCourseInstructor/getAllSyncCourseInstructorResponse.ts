export interface SyncCourseInstructor {
  id: string;
  syncCourseContentId: string;
  instructorId: string;
}
export interface getAllSyncCourseInstructorResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: SyncCourseInstructor[];
  hasPrevious: boolean;
  hasNext: boolean;
}
