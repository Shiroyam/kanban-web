import { ButtonBoardPopup, PopupBoard } from "features/create-board"
import { ButtonCross } from "shared/ui"
import withProviders from "./providers"
import "./styles/index.scss"

function App() {
  return (
    <div className="App">
      Kanban-web
      <ButtonCross />
      <ButtonBoardPopup />
      <PopupBoard />
    </div>
  )
}

export default withProviders(App)
