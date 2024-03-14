export interface UserOperationClaim {
  id: number;
  userId: string;
  operationClaimId: number;
}

export interface getAllUserOperationClaimResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: UserOperationClaim[];
  hasPrevious: boolean;
  hasNext: boolean;
}
