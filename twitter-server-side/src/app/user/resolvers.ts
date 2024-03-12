import axios from "axios";
import { prismaClient } from "../../clients/db";
import JWTservice from "../../services/jwt";

interface GoogleTokenResult {
    iss?: string;
    azp?: string;
    aud?: string;
    sub?: string;
    email?: string;
    email_verified?: string;
    nbf?: string;
    name?: string;
    picture?: string;
    given_name?: string;
    locale?: string;
    interfaceexp?: string;
    jti?: string;
    alg?: string;
    kid?: string;
    typ?: string;
}

const queries = {
    verifyGoogleToken: async (_: any, { token }: { token: string }) => {
        try {
            const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
            googleOauthURL.searchParams.set('id_token', token);

            const { data } = await axios.get<GoogleTokenResult>(googleOauthURL.toString(), {
                responseType: 'json'
            });
            console.log("Google token data:", data); // Add this line for logging


            // Check if email is defined
            if (!data || !data.email) {
                console.error("Invalid token. Email not provided.", data); // Add this line for detailed error message
                throw new Error("Invalid token. Email not provided.");
            }
            

            let user = await prismaClient.user.findUnique({
                where: { email: data.email }
            });

            if (!user) {
                // Create new user if not exists
                user = await prismaClient.user.create({
                    data: {
                        email: data.email,
                        firstName: data.name || "",
                        lastName: data.name || "", // Assuming Google provides full name
                        profileImageURL: data.picture || ""
                    }
                });
            }
            const userInDb=await prismaClient.user.findUnique({where:{email:data.email}})
           
            if(!userInDb) throw new Error('user with email not found')
            const userToken=await JWTservice.generateTokenForUser(userInDb)

            return userToken;
        } catch (error) {
            console.error("Error verifying Google token:", error);
            throw new Error("Failed to verify Google token.");
        }
    }
};

export const resolvers = { queries };
