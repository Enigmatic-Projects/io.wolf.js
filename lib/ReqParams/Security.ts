export interface ISecurityLogin {
    headers: {
        version: number;
    }
    body: {
        username: string;
        password: string;
        type: 'email';
    }
}