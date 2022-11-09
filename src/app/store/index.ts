import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { boardModel } from "entities/board"
import { subtaskModel } from "entities/subtask"
import { taskModel } from "entities/task"
import { createBoardModel } from "features/create-board"

export const rootReducer = combineReducers({
  boards: boardModel.boardSlice.reducer,
  createBoards: createBoardModel.popupSlice.reducer,
  subtasks: subtaskModel.subtaskSlice.reducer,
  tasks: taskModel.taskSlice.reducer,
})

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof storeSetup>
export type AppDispatch = AppStore["dispatch"]
