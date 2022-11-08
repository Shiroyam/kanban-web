import { ButtonBoardPopup } from "features/create-board"
import { Link, useLocation } from "react-router-dom"
import { useTypesSelector } from "shared/lib"
import { ButtonBoard, Logo, Title } from "shared/ui"
import styles from "./index.module.scss"

export const Aside = () => {
  const { entite } = useTypesSelector((state) => state.boards)
  const { pathname } = useLocation()
  const pathnameSlice = pathname.slice(1, pathname.length + 1)

  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.title}>
        <Title text="ALL BOARDS" length={`${entite.length}`} />
      </div>
      {entite.map((board) => (
        <Link key={board.id} to={board.name} style={{ textDecoration: "none" }}>
          <ButtonBoard active={pathnameSlice === board.name} themes="board">
            {board.name}
          </ButtonBoard>
        </Link>
      ))}
      <ButtonBoardPopup />
    </aside>
  )
}
