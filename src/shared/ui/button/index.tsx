import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import styles from "./index.module.scss"

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}
