import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import cn from "classnames"
import styles from "./index.module.scss"

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
}
