"use client"
import React, { useCallback } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { GraphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";

interface GoogleLoginButtonProps {
  onSuccess?: (credential: any) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onSuccess }) => {

  const handleLoginWithGoogle=useCallback( async (cred: CredentialResponse)=>{
        const googleToken=cred.credential
        if(!googleToken) return  toast.error('Google Token not Found');
        const { verifyGoogleToken}=await GraphqlClient.request(verifyUserGoogleTokenQuery,{token:googleToken})
        toast.success('Verified Success')
        console.log(verifyGoogleToken)

        if(verifyGoogleToken)
          window.localStorage.setItem("twittertoken",verifyGoogleToken)
      },[])


  return (
    <GoogleLogin
      onSuccess={handleLoginWithGoogle}/>
  );
};

export default GoogleLoginButton;
