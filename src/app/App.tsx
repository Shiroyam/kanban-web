import { ButtonCross } from "shared/ui"
import withProviders from "./providers"
import "./styles/index.scss"

function App() {
  return (
    <div className="App">
      Kanban-web
      <ButtonCross />
    </div>
  )
}

export default withProviders(App)
