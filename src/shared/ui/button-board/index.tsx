import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { ColumnsSVG } from "./columnsSvg"
import cn from "classnames"
import styles from "./index.module.scss"

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  active: boolean
  themes: "create" | "board"
}

export const ButtonBoard = ({
  themes,
  active,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.active]: active,
        [styles.create]: themes == "create",
        [styles.board]: themes == "board",
      })}
      {...props}
    >
      <ColumnsSVG className={cn(styles.svg, { [styles.active]: active })} />
      <span className={styles.text}>{children}</span>
    </button>
  )
}
