import styles from './Auth.module.css'

const Label = ({ text }) => {
    return <label className={styles.formlabel}>{text}</label>
}

export default Label