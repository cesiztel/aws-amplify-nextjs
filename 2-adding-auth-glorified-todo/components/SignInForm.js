import styles from './Auth.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Input from './Input.js'
import Button from './Button.js'

const SignInForm = ({ handleSubmit, errorMessage }) => {
    const [errorMsg, setErrorMsg] = useState('')
    if (errorMsg) {
        setErrorMsg(errorMessage)
    }

    return (
        <div className={styles.container}> 
            <h2 className={styles.title}>Sign in</h2>
            <form className={styles.signupform} onSubmit={handleSubmit}>
                <Input label="Type your username" 
                    attr={{ type: "text", name:"username", required: true }} />
                <Input label="Type your password" 
                    attr={{ type: "password", name:"password", required: true }} />
                <Button label="Sign in"/>
                
                {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

                <p className={styles.createAccount}>
                    <Link href="/signup">
                        <a>Create an account</a>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default SignInForm;