
export interface Application {
  id: string;
  studentId: string;
  isFormAccepted: boolean;
  isDocumentAccepted: boolean;
}
export interface getAllApplicationResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Application[];
  hasPrevious: boolean;
  hasNext: boolean;
}

