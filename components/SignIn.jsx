"use client";

import React from "react";
import { signInWithPopup } from "firebase/auth";
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
        <div className="w-96 max-w-[100vw] h-60 bg-white z-[200]">
          <p>adasd</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
