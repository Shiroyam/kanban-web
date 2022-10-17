import styles from "./styles.module.scss"

export interface TaskCardProps {
  title: string
  completedSubtask: number
  uncompletedSubtask: number
}

export const TaskCard = ({
  title,
  uncompletedSubtask,
  completedSubtask,
}: TaskCardProps) => {
  return (
    <div className={styles.task}>
      <div className={styles.title}>{title}</div>
      <div className={styles.substask}>
        {completedSubtask} of {uncompletedSubtask} substasks
      </div>
    </div>
  )
}
