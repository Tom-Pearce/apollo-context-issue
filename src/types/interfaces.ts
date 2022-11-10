
export interface AuthContext {
    user?: {
        id: number;
        permissions: {
            read: string[];
            write: string[];
        };
    };
}
