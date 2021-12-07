import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import Logo from "../components/Logo";
import styles from "../styles/Sign.module.css";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const credentials = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    try {
      const { user } = await Auth.signUp({ ...credentials });

      if (!user) {
        setMessage("Authentication server failed!");
        throw "Signup error exception";
      } else {
        router.push("/signin");
      }
    } catch (err) {
      console.error(`Signup error: ${err}`);
    }
  }

  return (
    <>
      <div className={styles.image}>
        <Logo />
      </div>
      <SignUpForm handleSubmit={handleSubmit} error={message} />
    </>
  );
}
