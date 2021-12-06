import styles from './TaskInput.module.css'

const TaskInput = ({ attr }) => {
    return (
        <input className={styles.taskInput} 
            type="text" 
            name="task" 
            placeholder="Escribe aquí tu tarea" 
            required 
            {...attr} />
    )
}

const TaskNoteInput = ({ attr }) => {
    return (
        <textarea className={styles.taskDescription} 
            placeholder="Escribe aquí una nota" 
            required {...attr}></textarea>
    )
}

export { 
    TaskInput, 
    TaskNoteInput 
};