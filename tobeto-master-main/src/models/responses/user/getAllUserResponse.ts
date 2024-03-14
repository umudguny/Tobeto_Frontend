export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordSalt: string;
  passwordHash: string;
  status: boolean;
}

export interface getAllUserResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: User[];
  hasPrevious: boolean;
  hasNext: boolean;
}
