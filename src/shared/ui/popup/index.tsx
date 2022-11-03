import styles from "./index.module.scss"

interface PopupProps {
  children: React.ReactNode
}

export const Popup = ({ children }: PopupProps) => {
  return (
    <div className={styles.popup}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
