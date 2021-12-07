import { useState } from "react";
import SignInForm from "../components/SignInForm";
import Logo from "../components/Logo";
import styles from "../styles/Sign.module.css";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export default function Sigin() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const credentials = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    try {
      const user = await Auth.signIn(
        credentials.username,
        credentials.password
      );

      if (!user) {
        setMessage("Authentication server failed!");
        throw "Signin error exception";
      } else {
        router.push("/");
      }
    } catch (err) {
      setMessage(err.message);
      console.error(`Signin error: ${err.message}`);
    }
  }

  return (
    <>
      <div className={styles.image}>
        <Logo />
      </div>
      <SignInForm handleSubmit={handleSubmit} error={message} />
    </>
  );
}
