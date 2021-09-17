import { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import Logo from '../components/Logo'
import styles from '../styles/Sign.module.css'

export default function SignUp() {
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        
        const credentials = {
            username: e.target[0].value,
            password: e.target[2].value,
            attributes: {
                email: e.target[1].value,
            }
        }
        
        console.log(credentials);
        // Here the Amplify code
    }

    return (
        <>
            <div className={styles.image}><Logo /></div>
            <SignUpForm handleSubmit={handleSubmit}
                errorMsg={message} />
        </>
    )
}