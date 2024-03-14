export interface Certificate {
  id: string;
  studentId: string;
  url: string;
  name: string;
}


export interface getAllCertificateResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Certificate[];
  hasPrevious: boolean;
  hasNext: boolean;
}

