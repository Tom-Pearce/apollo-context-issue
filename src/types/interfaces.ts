import { BaseContext } from '@apollo/server';

export interface AuthContext extends BaseContext {
    user?: {
        id: number;
        permissions: {
            read: [string?];
            write: [string?];
        };
    };
}
