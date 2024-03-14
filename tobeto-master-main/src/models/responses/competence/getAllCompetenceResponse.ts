
export interface Competence{
  id: string;
  studentId: string;
  name: string;
}
export interface getAllCompetenceResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Competence[];
  hasPrevious: boolean;
  hasNext: boolean;
}
