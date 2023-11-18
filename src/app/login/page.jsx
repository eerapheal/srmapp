import styles from "./Login.module.css";

const Login = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.btn}>Continue with Google</div>
        <div className={styles.btn}>Continue with Facebook</div>
        <div className={styles.btn}>Continue with GitHub</div>
      </div>
    </div>
  );
};

export default Login;