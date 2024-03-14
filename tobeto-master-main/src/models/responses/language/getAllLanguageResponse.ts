export interface Language {
  id: string;
  studentId: string;
  languageLevelId: string;
  languageTypeId: string;
}

export interface getAllLanguageResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Language[];
  hasPrevious: boolean;
  hasNext: boolean;
}


