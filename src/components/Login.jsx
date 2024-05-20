import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";

function Login() {
  const { userDetails, setUserDetails } = useContext(LoginContext);

  return (
    <>
      <div>User Login : {userDetails}</div>
      <button onClick={() => setUserDetails(false)}>False</button>
      <button onClick={() => setUserDetails(true)}>True</button>
    </>
  );
}

export default Login;
