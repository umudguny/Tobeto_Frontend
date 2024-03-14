export interface City {
  id: string;
  name: string;
}

export interface getAllCityResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: City[];
  hasPrevious: boolean;
  hasNext: boolean;
}


