export interface Situation {
  id: string;
  name: string;
}

export interface getAllSituationResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Situation[];
  hasPrevious: boolean;
  hasNext: boolean;
}
