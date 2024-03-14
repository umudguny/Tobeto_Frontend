export interface SocialMedia {
  id: string;
  studentId: string;
  socialMediaNameId: string;
  url: string;
}

export interface getAllSocialMediaResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: SocialMedia[];
  hasPrevious: boolean;
  hasNext: boolean;
}
