export interface OperationClaim {
  id: string;
  name: string;
}


export interface getAllOperationClaimResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: OperationClaim[];
  hasPrevious: boolean;
  hasNext: boolean;
}
