import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import styles from "./index.module.scss"

type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Checkbox = ({ checked, ...props }: CheckboxProps) => {
  return (
    <label className={styles.label}>
      <input
        checked={checked}
        className={styles.checkbox}
        type={"checkbox"}
        {...props}
      />
    </label>
  )
}
