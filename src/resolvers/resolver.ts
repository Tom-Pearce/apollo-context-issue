import type { getUserArgs } from '~/types/arguments';
import { AuthContext } from '~/types/interfaces';


export const resolvers = {
    Query: {
        user: async (_: undefined, args: getUserArgs, context: AuthContext) => {
            return {id:1, name: "Tom", email: "email@email.com"}
        }
    }
};
