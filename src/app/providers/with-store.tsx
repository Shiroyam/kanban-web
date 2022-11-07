import { Provider } from "react-redux"
import { storeSetup } from "../store"

const store = storeSetup()

const withStore = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>

withStore.displayName = "withStore"
export default withStore
