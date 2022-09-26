import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log In Form</h1>
      <div className={styles.form.container}>
        <div className={styles.left}>
					<img className={styles.img} src="./images/login.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth} >
						<img src="./images/google.png" alt="google.icon" />
						<span>Sign in with Google</span>
					</button>
					<p className={styles.text}>
						New Here? <Link to='/signup'>Sign Up</Link>
					</p>
				</div>
      </div>
    </div>
  );
}
