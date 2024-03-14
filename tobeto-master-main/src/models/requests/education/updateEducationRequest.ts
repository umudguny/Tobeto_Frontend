export interface updateEducationRequest {
    id: string;
    studentId: string;
    situationId: string;
    university: string;
    department: string;
    startedDate: string;
    endedDate: string;
    isContinue: boolean;
}
