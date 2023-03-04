import Image from "next/image";
import styles from "src/styles/Auth.module.css";

function LayoutAuth() {
  return (
    <>
      <p className={styles["title-login"]}>Payur</p>
      <div className="mx-auto justify-center items-center">
        <Image
          src={"/phoneFix.png"}
          alt="image phone"
          width={450}
          height={500}
          className="mx-auto justify-center"
        />
      </div>
      <p className={styles["word-login"]}>App that Covering Banking Needs.</p>
      <p className={styles["fill-word"]}>
        Payur is an application that focussing in banking needs for all users in
        the world. Always updated and always following world trends. 5000+ users
        registered in FazzPay everyday with worldwide users coverage.
      </p>
    </>
  );
}

export default LayoutAuth;
