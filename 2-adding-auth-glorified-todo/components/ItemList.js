import styles from './ItemList.module.css'
import { useState } from 'react'

const Item = ({ id, task, taskFinished, onClick }) => {
    const [finished, setFinished] = useState(taskFinished)

    function handleClick(e) {
        e.preventDefault()

        setFinished(!taskFinished)
        if (onClick) {
            onClick(finished)
        }
    }

    return (
        <li key={id}>
            <div className={styles.item}>
                <p className={finished ? styles.done : styles.task} onClick={handleClick}>{task.name}</p>
                {!finished && <p className={styles.note}>{task.note}</p>}
            </div>
        </li>
    )
}

const ItemList = ({ tasks }) => {
    return (
        <ul className={styles.nobullets}>
            {tasks.map((task, i) => (
                <Item id={i} task={task} finished={false} />
            ))}
        </ul>
    )
}

export default ItemList