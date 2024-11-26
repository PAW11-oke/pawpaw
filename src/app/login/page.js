"use client"

import Login from "@/components/auth/Login";
import React, {useState} from "react";


const LogIn = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <Login setUser = {setUser}/>
    </>
  );
};

export default LogIn;