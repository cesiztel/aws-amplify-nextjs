import { useState } from 'react'
import SignInForm from '../components/SignInForm'
import Logo from '../components/Logo'
import styles from '../styles/Sign.module.css'

export default function Sigin() {
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        
        const credentials = {
            username: e.target[0].value,
            password: e.target[1].value
        }

        console.log(credentials);
        // Here the amplify code ...
    }

    return (
        <>
            <div className={styles.image}><Logo /></div>
            <SignInForm handleSubmit={handleSubmit}
                errorMsg={message} />
        </>
    )
}