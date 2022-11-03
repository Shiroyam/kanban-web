import styles from "./index.module.scss"

interface PopupProps {
  children: React.ReactNode
  popupRef: React.RefObject<HTMLDivElement>
}

export const Popup = ({ children, popupRef }: PopupProps) => {
  return (
    <div className={styles.popup}>
      <div ref={popupRef} className={styles.content}>
        {children}
      </div>
    </div>
  )
}
