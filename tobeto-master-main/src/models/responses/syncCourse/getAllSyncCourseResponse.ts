export interface SyncCourse {
  id: string;
  categoryId: string;
  name: string;
  title: string;
  language: string;
  subtype: string;
}

export interface getAllSyncCourseResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: SyncCourse[];
  hasPrevious: boolean;
  hasNext: boolean;
}
