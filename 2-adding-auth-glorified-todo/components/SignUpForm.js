import styles from './Auth.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Input from './Input.js'
import Button from './Button.js'
import ErrorText from './ErrorText.js'

const SignUpForm = ({ handleSubmit, error }) => {
    return (
        <div className={styles.container}> 
            <h2 className={styles.title}>Sign up</h2>
            <form className={styles.signupform} onSubmit={handleSubmit}>
                <Input label="Type your username" 
                    attr={{ type: "text", name:"username", required: true }} />
                <Input label="Type your email" 
                    attr={{ type: "text", name:"email", required: true }} />
                <Input label="Type your password" 
                    attr={{ type: "password", name:"password", required: true }} />
                <Button label="Sign in"/>
                
                <ErrorText error={error} />

                <p className={styles.createAccount}>
                    <Link href="/signin">
                        <a>If you have an account go to sign in</a>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default SignUpForm;