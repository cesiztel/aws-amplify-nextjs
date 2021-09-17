import styles from './Auth.module.css'
import Label from './Label.js'

const Input = ({label: label, attr}) => {
    return (
        <>
            <Label text={label}/>
            <input className={styles.forminput} 
               {...attr} />
        </>
    )
}

export default Input;