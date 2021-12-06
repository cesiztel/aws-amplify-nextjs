import styles from './Auth.module.css'

const Button = ({ label, small }) => {
    if (small) {
        return (
            <div className={styles.small}>
                <button type="submit" 
                    className={styles.primary}>{label}</button>
            </div>
        )
    }
    return <button type="submit" className={styles.primary}>{label}</button>
}

export default Button