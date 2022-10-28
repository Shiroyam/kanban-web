import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import styles from "./index.module.scss"

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Input = ({ placeholder, ...props }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.input}
      {...props}
    ></input>
  )
}
