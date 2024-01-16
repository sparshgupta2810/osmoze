"use client";
import React from "react";
import { useEffect, useState } from "react";
import UserDataService from "../Services/page.js";
import { UserAuth } from "../firebase/page";

const Page = () => {
  const [users, setUsers] = useState([]);
  const {
    getUserId,
    userId,
    setUserId,
    userName,
    setUserName,
    email,
    setEmail,
    branch,
    setBranch,
  } = UserAuth();

  const getUser = async () => {
    const data = await UserDataService.getAllUser();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const updateUserData = async (id) => {
    await UserDataService.updateUser(id);
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUser();
  };

  return (
    <>
      <div className="mb-2">
        <button variant="dark edit">Get ur Data</button>
      </div>
      <table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>UserName</th>
            <th>Branch</th>
            <th>Email id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((doc, index) => { */}
          {/* return ( */}
          <tr>
            <td>{userName}</td>
            <td>{branch}</td>
            <td>{email}</td>
            <td>
              <button
                variant="secondary"
                className="edit"
                onClick={(e) => getUserId(userId)}
              >
                Edit
              </button>
              <button
                variant="danger"
                className="delete"
                onClick={(e) => deleteHandler(doc.id)}
              >
                Delete
              </button>
            </td>
          </tr>
          {/* ); */}
          {/* })} */}
        </tbody>
      </table>
    </>
  );
};

export default Page;
