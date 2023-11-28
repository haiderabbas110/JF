export class UserDto {
    id: number;
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    reset_token?: string;
    reset_token_expiry?: string;
    is_active: boolean;
    role: number

}