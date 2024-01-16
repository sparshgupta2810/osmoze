"use client"
import React from "react";
import { useState } from 'react';
import { firestore, firebase } from '../firebase'; 
import Link from "next/link";
import UserDataService from "../Services/page.js";
// import Profile  from "./Profile";

export default function Page ({id,setUserId}) {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || email === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newUser = {
      name,
      branch,
      rollNumber,
      email
    };
    console.log(newUser);

    try {
      if (id !== undefined && id !== "") {
        await UserDataService.updateUser(id, newUser);
        setUserId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await UserDataService.addUser(newUser);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setBranch("");
    setRollNumber("");
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
              value={name}
               onChange={(e) => setName(e.target.value)}
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
              htmlFor="year"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Roll No.
            </label>
            <input
             value={rollNumber}
             onChange={(e) => setRollNumber(e.target.value)}
              type="text"
              id="number"
              name="number"
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
             onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
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
            <Link href={'/Profile'}>SIGN UP</Link>
          </button>
        </form>
      </div>
      <div className="flex flex-wrap mt-6 ">
        <div className="text-left">
          <small className="text-grey-100 text-sm">
            Already Registered?
            <span className="bg-cyan-500 text-gray-800 px-2 py-2 rounded ml-1 mr-1 mb-1 uppercase shadow-md hover:shadow-lg inline-flex items-center font-bold text-xs">
              <Link href="/signin">Login</Link>
            </span>
          </small>
        </div>
      </div>
    </main>
    </div>
  );
};


