import styles from "./index.module.scss"
import React from "react"

interface SubtaskProps {
  input: React.ReactNode
  cross: React.ReactNode
}

export const SubtaskCreate = ({ input, cross }: SubtaskProps) => {
  return (
    <div className={styles.subtask}>
      <div className={styles.input}>{input}</div>
      <div className={styles.cross}>{cross}</div>
    </div>
  )
}
