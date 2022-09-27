import styles from "./style.module.css";

export default function Home(userDetails) {
    const user = userDetails.user
    const logout = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/logout`,
      "_self"
    );
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign Up Form</h1>
      <div className={styles.form.container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/signup.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.form_heading}>Create Account</h2>
          <input type="text" className={styles.input} placeholder="Username" />
          <input type="text" className={styles.input} placeholder="Email" />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
          />
          <button className={styles.btn}>Sign Up</button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google.icon" />
            <span>Sign up with Google</span>
          </button>
          <p className={styles.text}>
            Already Have Account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
