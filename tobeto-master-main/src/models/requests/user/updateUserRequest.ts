export interface updateUserRequest {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordSalt: string;
    passwordHash: string;
    status: boolean;
}
