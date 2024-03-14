export interface LanguageLevel {
  id: string;
  name: string;
}


export interface getAllLanguageLevelResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: LanguageLevel[];
  hasPrevious: boolean;
  hasNext: boolean;
}
