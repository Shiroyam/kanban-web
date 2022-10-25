import { Link } from "react-router-dom"
import LogoSVG from "./logo.svg"
import styles from "./index.module.scss"

export const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <header className={styles.logo}>
        <img src={LogoSVG} alt="logo" />
        <h1 className={styles.title}>kanban</h1>
      </header>
    </Link>
  )
}
