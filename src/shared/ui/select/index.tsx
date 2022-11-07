import { DetailedHTMLProps, SelectHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./index.module.scss"

type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

export const Select = ({
  children,
  className,
  value,
  onChange,
}: SelectProps) => {
  return (
    <select
      className={cn(styles.select, className)}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  )
}
