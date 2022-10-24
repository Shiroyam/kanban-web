import styles from "./index.module.scss"

interface BoardProps {
  children: React.ReactNode
}

export const Board = ({ children }: BoardProps) => {
  return <article className={styles.board}>{children}</article>
}
