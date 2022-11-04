import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { data } from "../lib"

interface IPayloadCreate {
  name: string
}

interface IPayloadChange {
  id: number
  newName: string
}

const initialState = {
  entite: data,
}

export const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    createBoard(state, action: PayloadAction<IPayloadCreate>) {
      state.entite.push({
        id: state.entite.length + 1,
        name: action.payload.name,
      })
    },
    deleteBoard(state, action: PayloadAction<number>) {
      state.entite.splice(action.payload - 1, 1)
    },
    changeBoard(state, action: PayloadAction<IPayloadChange>) {
      state.entite[action.payload.id - 1].name = action.payload.newName
    },
  },
})

export const { createBoard, deleteBoard, changeBoard } = boardSlice.actions
