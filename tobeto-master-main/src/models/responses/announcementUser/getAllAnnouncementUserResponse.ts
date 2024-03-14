export interface AnnouncementUser {
  id: string;
  announcementId: string;
  userId: string;
  isRead: boolean;
}

export interface getAllAnnouncementUserResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: AnnouncementUser[];
  hasPrevious: boolean;
  hasNext: boolean;
}
