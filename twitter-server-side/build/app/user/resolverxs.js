"use strict";
// import axios from "axios";
// import { prismaClient } from "../../clients/db";
// import JWTservice from "../../services/jwt";
// const queries = {
//     verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
//         const googleToken = token;
//         const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
//         googleOauthURL.searchParams.set("id_token", googleToken);
//         try {
//             const { data } = await axios.get(googleOauthURL.toString(), {
//                 responseType: 'json',
//                 headers: {
//                     'Authorization': 'Bearer YOUR_API_KEY_HERE'
//                 }
//             });
//             console.log(data);
//             // Handle the data from Google's tokeninfo endpoint
//             // For example, check if the email is verified and proceed accordingly
//             // if (data.email_verified) {
//                 // Email is verified, continue with your logic
//                 // For example, create or authenticate the user
//                 // const user = await prismaClient.user.findUnique({ where: { email: data.email } });
//                 // if (!user) {
//                 //     await prismaClient.user.create({
//                 //         data: {
//                 //             email: data.email,
//                 //             firstName: data.given_name,
//                 //             lastName: data.name,
//                 //             profileImageURL: data.picture
//                 //         }
//                 //     });
//                 // }
//                 // const userInDb = await prismaClient.user.findUnique({ where: { email: data.email } });
//                 // if (!userInDb) throw new Error('User with email not found');
//                 // const userToken = JWTservice.generateTokenForUser(userInDb);
//             //  else {
//             //     // Email is not verified, handle accordingly
//             //     throw new Error('Email is not verified');
//             // }
//             return "ok";
//         } catch (error) {
//             console.error("Error verifying Google token:", error);
//             throw new Error("Failed to verify Google token");
//         }
//     }
// }
// export const resolvers= {queries}
