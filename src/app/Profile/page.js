"use client"
import React from "react";
import { useEffect, useState } from "react";
import UserDataService from "../Services/page.js";

const Page = () => {

    const UserList = ({ getuserId }) => {
        const [users, setUsers] = useState([]);
        useEffect(() => {
            getUser();
        }, []);
      
        const getUser = async () => {
          const data = await UserDataService.getAllUser();
          console.log(data.docs);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
      
        const deleteHandler = async (id) => {
          await UserDataService.deleteUser(id);
          getUser();
        };

        return (
          <>
            <div className="mb-2">
              <button variant="dark edit" onClick={getUser}>
                Refresh List
              </button>
            </div>
            <table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Book Title</th>
                  <th>Book Author</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((doc, index) => {
                  return (
                    <tr key={doc.id}>
                      <td>{index + 1}</td>
                      <td>{doc.name}</td>
                      <td>{doc.branch}</td>
                      <td>{doc.email}</td>
                      <td>
                        <button
                          variant="secondary"
                          className="edit"
                          onClick={(e) => getuserId(doc.id)}
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
                  );
                })}
              </tbody>
            </table>
          </>
        );
};
};

export default Page;
