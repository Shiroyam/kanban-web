import { ReactNode } from "react"
import styles from "./index.module.scss"

interface SubtaskProps {
  before?: ReactNode
  text: string
}

export const SubtaskPreview = ({ before, text }: SubtaskProps) => {
  return (
    <div className={styles.subtask}>
      {before}
      <div className={`${styles.text} ${styles.active}`}>{text}</div>
    </div>
  )
}
