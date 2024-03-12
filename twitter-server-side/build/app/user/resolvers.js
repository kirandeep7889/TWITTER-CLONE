"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const axios_1 = __importDefault(require("axios"));
const db_1 = require("../../clients/db");
const jwt_1 = __importDefault(require("../../services/jwt"));
const queries = {
    verifyGoogleToken: (_, { token }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
            googleOauthURL.searchParams.set('id_token', token);
            const { data } = yield axios_1.default.get(googleOauthURL.toString(), {
                responseType: 'json'
            });
            console.log("Google token data:", data); // Add this line for logging
            // Check if email is defined
            if (!data || !data.email) {
                console.error("Invalid token. Email not provided.", data); // Add this line for detailed error message
                throw new Error("Invalid token. Email not provided.");
            }
            let user = yield db_1.prismaClient.user.findUnique({
                where: { email: data.email }
            });
            if (!user) {
                // Create new user if not exists
                user = yield db_1.prismaClient.user.create({
                    data: {
                        email: data.email,
                        firstName: data.name || "",
                        lastName: data.name || "", // Assuming Google provides full name
                        profileImageURL: data.picture || ""
                    }
                });
            }
            const userInDb = yield db_1.prismaClient.user.findUnique({ where: { email: data.email } });
            if (!userInDb)
                throw new Error('user with email not found');
            const userToken = yield jwt_1.default.generateTokenForUser(userInDb);
            return userToken;
        }
        catch (error) {
            console.error("Error verifying Google token:", error);
            throw new Error("Failed to verify Google token.");
        }
    })
};
exports.resolvers = { queries };
