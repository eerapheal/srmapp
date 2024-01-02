"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import styles from "./authLink.module.css";
import Link from "next/link";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={`login`} className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href={`/write`} className={styles.link}>
            Create
          </Link>
          <span onClick={signOut} className={styles.link}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href={`/login`}>Login</Link>
          ) : (
            <>
              <Link href={`/write`}>Create</Link>
              <span onClick={signOut} className={styles.link} >
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
