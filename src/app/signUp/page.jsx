"use client";
import React from "react";
// import { useState, useEffect } from "react";
// import { firestore, firebase } from "../firebase";
import Link from "next/link";
import UserDataService from "../Services/page.js";
import { UserAuth } from "../firebase/page";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
export default function Page() {
  const {
    userName,
    email,
    branch,
    password,
    message,
    userId,
    setBranch,
    setEmail,
    setMessage,
    setUserName,
    setUserId,
    setPassword,
  } = UserAuth();

  //For Google Connect!
  const { googleSignIn } = UserAuth();
  const router = useRouter();
  // const handleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //     router.push("/register");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        localStorage.setItem("userName", data.user.displayName);
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("userId", data.user.localId);
        // console.log(data.user.displayName);
        // window.location.reload();
        router.push("/register");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (userName === "" || email === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newUser = {
      userName,
      branch,
      password,
      email,
    };
    console.log(newUser);

    try {
      await UserDataService.addUser(newUser);
      setMessage({ error: false, msg: "New User added successfully!" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setUserName("");
    setBranch("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
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

            <span className="text-black text-xs">SIGN UP WITH</span>
            <button
              onClick={SignInWithGoogle}
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
            <p className="text-gray-600 mt-3"> Or sign up with credentials</p>
          </div>

          <form className="mt-6">
            <div className="mb-4 text-left">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                USERNAME
              </label>

              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label
                htmlFor="branch"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                BRANCH
              </label>
              <input
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                type="text"
                id="branch"
                name="branch"
                className="w-full p-2 text-black border border-gray-300 rounded"
                required
              />
            </div>
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
                className="w-full p-2 text-black border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4 text-left">
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
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
              />
            </div>
            {/* <div className="mb-4 text-left">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
              className="w-full p-2 border border-gray-300 text-black rounded"
            />
          </div> */}
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              SIGN UP
            </button>
          </form>
        </div>
        <div className="flex flex-wrap mt-6 ">
          <div className="text-left">
            <small className="text-grey-100 text-sm">
              Already Registered?
              <span className="bg-cyan-500 text-gray-800 px-2 py-2 rounded ml-1 mr-1 mb-1 uppercase shadow-md hover:shadow-lg inline-flex items-center font-bold text-xs">
                <Link href="/signIn">Login</Link>
              </span>
            </small>
          </div>
        </div>
      </main>
    </div>
  );
}
