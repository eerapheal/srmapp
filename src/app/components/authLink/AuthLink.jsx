"use client";
import React, { useState, useEffect } from "react";
import { signOut } from "next-auth/react"
import styles from "./authLink.module.css";
import Link from "next/link";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const status = "unauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login"  className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/create" className={styles.link}>Create</Link>
          <span onClick={signOut} className={styles.link}>Logout</span>
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
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/create">Create</Link>
              <span onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
