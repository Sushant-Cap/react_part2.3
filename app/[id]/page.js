"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Page = ({ params }) => {
  const { id } = params;
  const [user, setUsers] = useState({});

  const getUser = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return <div>{JSON.stringify(user)}</div>;
};

export default Page;
