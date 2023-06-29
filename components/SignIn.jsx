"use client";

import React from "react";
import { signInWithPopup } from "firebase/auth";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
// import firebaseInit from "@/config/firebaseConfig";

// firebaseInit;

// const providerGithub = new GithubAuthProvider();
// const auth = getAuth();

const SignIn = ({ signIn, setSignIn }) => {
  // const handleSignInGithub = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, providerGithub);
  //     console.log(result);

  //     const { email: username, email } = result.user;
  //     // await this.githubSignIn({ username, email });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div
      className={
        signIn
          ? "fixed left-0 bottom-0 w-screen h-screen flex justify-center items-center bg-none z-[199] duration-300 ease-in"
          : "fixed left-0 bottom-[100vh] w-screen h-screen flex justify-center items-center bg-none z-[199] duration-300 ease-in"
      }
    >
      <div
        className={
          signIn
            ? "fixed bottom-0 left-0 w-screen h-screen bg-black/30 z-[200] duration-300 ease-in"
            : "fixed bottom-[100vh] left-0 w-screen h-screen bg-black/30 z-[200] duration-300 ease-in"
        }
        onClick={() => setSignIn(false)}
      />
      <div className="flex justify-center items-center absolute inset-0">
        <div className="w-96 max-w-[100vw] h-60 bg-white z-[200]">
          <p className="justify-center flex items-center py-2">
            Sign in to InvestMate
          </p>
          <div className="mx-2">
            <button className="flex h-12 w-full items-center  px-4 py-2  text-white bg-blue-800 hover:bg-blue-600 mb-2">
              <FaFacebook className="mr-2 text-xl" />
              <p className="font-medium">Sign in with Facebook</p>
            </button>
            <button className="flex h-12 w-full items-center  px-4 py-2  text-white bg-blue-500 hover:bg-blue-400 mb-2">
              <FaTwitter className="mr-2 text-xl" />
              <p className="font-medium">Sign in with Twitter</p>
            </button>
            <button className="flex h-12 w-full items-center  px-4 py-2  text-white bg-red-500 hover:bg-red-600 mb-2">
              <FaGoogle className="mr-2 text-xl" />
              <p className="font-medium">Sign in with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
