export interface SyncCourseContent {
  id: string;
  syncCourseId: string;
  name: string;
  url: string;
  description: string;
  startedDate: string;
  endedDate: string;
}

export interface getAllSyncCourseContentResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: SyncCourseContent[];
  hasPrevious: boolean;
  hasNext: boolean;
}
