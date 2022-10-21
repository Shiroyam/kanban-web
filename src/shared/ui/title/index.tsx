import styles from "./styles.module.scss"
import cn from "classnames"

interface TitleProps {
  dot?: "todo" | "doing" | "done"
  text: string
  length: string
}

export const Title = ({ dot, text, length }: TitleProps) => {
  return (
    <>
      <div className={styles.title}>
        {dot ? (
          <div
            className={cn(styles.dot, {
              [styles.todo]: dot == "todo",
              [styles.done]: dot == "done",
              [styles.doing]: dot == "doing",
            })}
          />
        ) : null}
        {text} ({length})
      </div>
    </>
  )
}
