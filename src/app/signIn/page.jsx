"use client";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithGoogle,
} from "firebase/auth";

import { UserAuth } from "../firebase/page";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { collection } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";

const usersRef = collection(db, "users");

const Register = () => {
  // For Email and Password!

  const [error, setError] = useState("");
  const { email, setEmail, password, setPassword } = UserAuth();
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        localStorage.setItem("userName", data.user.displayName);
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("userId", data.user.localId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = async () => {
    try {
    } catch (error) {
      setError("Error creating account");
    }
  };

  //For Google Connect!
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <>
      <div></div>
      <main className="flex text-center px-20 mt-10 flex-col  items-center justify-center ">
        <div className="w-4/12 mx-auto mt-8 p-8 bg-gray-100 rounded-md">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://www.osmoze.in/images/Osmoze.svg"
              className="w-40 h-40"
            />
            <h2 className="text-2xl font-bold mb--1 text-black">
              Osmoze<span className="text-sky-600">24</span>
            </h2>

            <span className="text-black text-xs">SIGN IN WITH</span>
            <button
              onClick={handleSignIn}
              className="text-black text-sm m-2 flex mb-5 border border-2 border-gray-300 rounded-md shadow-md hover:shadow-lg hover:text-blue-600  py-1 px-2"
            >
              <img
                alt="..."
                className="w-5 mr-1"
                src="https://dashboard.technex.co.in/assets/img/google.svg"
              />
              Google
            </button>
            <div className=" border border-1  w-full border-gray-400 shadow-[0_1px_2px_rgba(57,62,86,0.5)]"></div>
            <p className="text-gray-600 mt-3"> Or sign in with credentials</p>
          </div>

          <form className="mt-6">
            <div className="mb-4 text-left">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                EMAIL
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>

            <div className="mb-4 text-left text-black">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                PASSWORD
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>

            <button
              onClick={handleRegister}
              type="button"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
