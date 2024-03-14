export interface updateUserResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordSalt: string;
    passwordHash: string;
    status: boolean;
}

