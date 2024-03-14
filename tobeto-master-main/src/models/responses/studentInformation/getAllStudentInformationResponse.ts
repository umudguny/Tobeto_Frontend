export interface StudentInformation {
  id: string;
  studentId: string;
  districtId: string;
  birthDate: string;
  nationalityId: string;
  phoneNumber: number;
  about: string;
  country: string;
  addressDescription: string;
}
export interface getAllStudentInformationResponse {
  from: number;
  index: number;
  size: number;
  count: number;
  pages: number;
  items: StudentInformation[];
  hasPrevious: boolean;
  hasNext: boolean;
}
