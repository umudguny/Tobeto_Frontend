export interface Instructor {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  about: string;
}
export interface getAllInstructorResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: Instructor[];
  hasPrevious: boolean;
  hasNext: boolean;
}
