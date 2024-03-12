import JWT from 'jsonwebtoken';
import { User } from '@prisma/client';

const JWT_SECRET="kirandeep@1234";

class JWTservice {
    public static async generateTokenForUser(user: User) {
        const payload={
            id:user?.id,
            email:user?.email,
        };
        const token=JWT.sign(payload,JWT_SECRET);
        return token;
    }
}

export default JWTservice;