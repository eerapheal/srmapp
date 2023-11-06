import React from "react";
import styles from "./authLink.module.css";
import Link from "next/link"
const AuthLink = () => {
  const status = "notauth";

  return (
    <>
      {status === "notauth" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/create">Create</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLink;
