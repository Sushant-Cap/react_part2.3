"use client";
import axios from "axios";
import React, { useState,  useEffect } from "react";

const Page = () => {
  const [users, setFirst] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setFirst(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <button
        onClick={getUsers}
        className="bg-blue-600 text-white px-4 py-2 rounded font-bold"
      >
        Get Data
      </button>
      <div className="p-8 bg-slate-200 mt-5">
        <ul>
          {users.map((e, index) => (
            <li key={e.id} className="text-black">
              {index + 1}. {e.username} --- <a href={`/${e.id}`}>Explore</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
