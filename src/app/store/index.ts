import { configureStore } from "@reduxjs/toolkit"

import { boardModel } from "entities/board"
import { createBoardModel } from "features/create-board"

export const store = configureStore({
  reducer: {
    boards: boardModel.boardSlice.reducer,
    createBoards: createBoardModel.popupSlice.reducer,
  },
})
