"use client";

import React from "react";
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import firebaseInit from "@/config/firebaseConfig";
import { BASE_URL } from "@/config/Url";

firebaseInit;

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerTwitter = new TwitterAuthProvider();
const auth = getAuth();

const SignIn = ({ signIn, setSignIn }) => {
  const handleSignInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, providerGoogle);
      console.log(BASE_URL + "/login", {
        method: "post",
        body: {
          id: result.user.uid,
          socialMedia: result.providerId,
          username: result.user.displayName,
        },
        headers: { "Content-Type": "application/json" },
      });

      const { data } = await fetch(BASE_URL + "/login", {
        method: "post",
        body: {
          id: result.user.uid,
          socialMedia: result.providerId,
          username: result.user.displayName,
        },
        headers: { "Content-Type": "application/json" },
      });

      console.log(data);

      // await this.githubSignIn({ username, email });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignInFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, providerFacebook);
      console.log(result.providerId, result.user.uid, result.user.displayName);

      // await this.githubSignIn({ username, email });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignInTwitter = async () => {
    try {
      const result = await signInWithPopup(auth, providerTwitter);
      console.log(result.providerId, result.user.uid, result.user.displayName);

      // await this.githubSignIn({ username, email });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
        signIn
          ? "fixed left-0 bottom-0 w-screen h-screen flex justify-center items-center bg-none z-[199] duration-300 ease-in"
          : "fixed left-0 bottom-[100vh] w-screen h-screen flex justify-center items-center bg-none z-[199] duration-300 ease-in"
      }>
      <div
        className={
          signIn
            ? "fixed bottom-0 left-0 w-screen h-screen bg-black/30 z-[200] duration-300 ease-in"
            : "fixed bottom-[100vh] left-0 w-screen h-screen bg-black/30 z-[200] duration-300 ease-in"
        }
        onClick={() => setSignIn(false)}
      />
      <div className="flex justify-center items-center absolute inset-0">
        <div className="w-96 max-w-[100vw] h-auto bg-white z-[200]">
          <div className="justify-center flex flex-col items-center py-2 h-32 bg-slate-200 bg-gradient-to-r from-gray-100 to-slate-300 m-2">
            <p className="font-bold">InvestMate</p>
            <p>Sign in to invest!</p>
          </div>
          <div className="mx-2">
            <button
              className="flex h-12 w-full items-center  px-4 py-2  text-white bg-red-500 hover:bg-red-600 mb-2"
              onClick={handleSignInGoogle}>
              <FaGoogle className="mr-2 text-xl" />
              <p className="font-medium">Sign in with Google</p>
            </button>
            <button
              className="flex h-12 w-full items-center  px-4 py-2  text-white bg-blue-800 hover:bg-blue-600 mb-2"
              onClick={handleSignInFacebook}>
              <FaFacebook className="mr-2 text-xl" />
              <p className="font-medium">Sign in with Facebook</p>
            </button>
            <button
              className="flex h-12 w-full items-center  px-4 py-2  text-white bg-blue-500 hover:bg-blue-400 mb-2"
              onClick={handleSignInTwitter}>
              <FaTwitter className="mr-2 text-xl" />
              <p className="font-medium">Sign in with Twitter</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
