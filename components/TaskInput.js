import styles from "./TaskInput.module.css";

const TaskInput = ({ attr }) => {
  return (
    <input
      className={styles.taskInput}
      type="text"
      name="task"
      placeholder="Write the name of your task"
      required
      {...attr}
    />
  );
};

const TaskNoteInput = ({ attr }) => {
  return (
    <textarea
      className={styles.taskDescription}
      placeholder="What do you think about your task?"
      required
      {...attr}
    ></textarea>
  );
};

export { TaskInput, TaskNoteInput };
