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
      <h1 className={styles.heading}>Home</h1>
      <div className={styles.form.container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/profile.jpg" alt="profile" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.form_heading}>Profile</h2>
          <img className={styles.profile_img} src={user.picture} alt="profile" />
          <input type="text" defaultValue={user.nam} className={styles.input} placeholder="Username" />
          <input type="text" defaultValue={user.email} className={styles.input} placeholder="Email" />
          <button className={styles.btn} onClick={logout} >Log Out</button>
    
        </div>
      </div>
    </div>
  );
}
