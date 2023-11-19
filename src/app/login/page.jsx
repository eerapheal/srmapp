"use client"
import { signIn, useSession } from "next-auth/react";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation"

const Login = () => {
  
  const router = useRouter();

  const {data,status} = useSession();
 
  if(status ==="loading") {
    return <div className={styles.loading}>Loading...</div>
  }

   if(status ==="authenticated") {
    router.push("/")
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.btn} onClick={() => signIn("google")}>Continue with Google</div>
        <div className={styles.btn}>Continue with Facebook</div>
        <div className={styles.btn}>Continue with GitHub</div>
      </div>
    </div>
  );
};

export default Login;