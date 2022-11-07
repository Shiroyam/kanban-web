import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./index.module.scss"

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Input = ({ placeholder, className, ...props }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={cn(styles.input, className)}
      {...props}
    ></input>
  )
}
