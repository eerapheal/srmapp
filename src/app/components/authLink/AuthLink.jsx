"use client";
import React, { useState, useEffect } from "react";
import styles from "./authLink.module.css";
import Link from "next/link";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const status = "notauth";

  return (
    <>
      {status === "notauth" ? (
        <Link href="/login"  className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/create" className={styles.link}>Create</Link>
          <span  className={styles.link}>Logout</span>
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
          {status === "notauth" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/create">Create</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
