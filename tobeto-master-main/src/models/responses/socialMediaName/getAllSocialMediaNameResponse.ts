export interface SocialMediaName {
  id: string;
  studentId: string;
  socialMediaNameId: string;
  url: string;
}

export interface getAllSocialMediaNameResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: SocialMediaName[];
  hasPrevious: boolean;
  hasNext: boolean;
}
