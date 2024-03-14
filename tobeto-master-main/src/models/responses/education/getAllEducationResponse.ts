export interface Education {
  studentId: string;
  situationId: string;
  university: string;
  department: string;
  startedDate: string;
  endedDate: string;
  isContinue: boolean;
}

export interface getAllEducationResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Education[];
  hasPrevious: boolean;
  hasNext: boolean;
}
