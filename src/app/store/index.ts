import { configureStore } from "@reduxjs/toolkit"

import { boardModel } from "entities/board"

export const store = configureStore({
  reducer: {
    boards: boardModel.boardSlice.reducer,
  },
})
