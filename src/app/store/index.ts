import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { boardModel } from "entities/board"
import { createBoardModel } from "features/create-board"

export const rootReducer = combineReducers({
  boards: boardModel.boardSlice.reducer,
  createBoards: createBoardModel.popupSlice.reducer,
})

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof storeSetup>
export type AppDispatch = AppStore["dispatch"]
