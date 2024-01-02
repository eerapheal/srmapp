"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import styles from "./authLink.module.css";
import Link from "next/link";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={`login`} className={styles.link} onClick={closeMenu}>
          Login
        </Link>
      ) : (
        <>
          <Link href={`/write`} className={styles.link} onClick={closeMenu}>
            Create
          </Link>
          <span onClick={() => { signOut(); closeMenu(); }} className={styles.link}>
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
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/" onClick={closeMenu}>About</Link>
          <Link href="/" onClick={closeMenu}>Contact</Link>
          {status === "unauthenticated" ? (
            <Link href={`/login`} onClick={closeMenu}>Login</Link>
          ) : (
            <>
              <Link href={`/write`} onClick={closeMenu}>Create</Link>
              <span onClick={() => { signOut(); closeMenu(); }}>
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
