import React from "react";
import Link from "next/link";

const page = () => {
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
              Osmoze'<span className="text-sky-600">24</span>
            </h2>

            <span className="text-black text-xs mb-2">
              COMPLETE YOUR PROFILE
            </span>
            <div className=" border border-1  w-full border-gray-400 shadow-[0_1px_2px_rgba(57,62,86,0.5)]"></div>
          </div>

          <form className="mt-6">
            <div className="mb-4 text-left">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                UserName
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Branch
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Year
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
        <div className="flex">
          <div mt-2 className="text-left">
            Already Registered?
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-1 my-2 mx-3 rounded hover:bg-blue-700"
          >
            <Link href="/signIn">Login</Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default page;
