import { DetailedHTMLProps, SelectHTMLAttributes } from "react"
import styles from "./styles.module.scss"

type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

export const Select = ({ children, value, onChange }: SelectProps) => {
  return (
    <select className={styles.select} value={value} onChange={onChange}>
      {children}
    </select>
  )
}
