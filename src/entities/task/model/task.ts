import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { subtaskModel } from "entities/subtask"
import { data } from "../lib"

interface IPayloadCreate {
  boardId: number
  title: string
  status: "TODO" | "DOING" | "DONE"
}

interface IPayloadChange {
  id: number
  newTitle: string
}

const initialState = {
  entite: data,
}

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<IPayloadCreate>) {
      state.entite.push({
        id: state.entite.length + 1,
        boardId: action.payload.boardId,
        title: action.payload.title,
        status: action.payload.status,
        completedSubtask: 0,
        uncompletedSubtask: 0,
      })
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.entite.splice(action.payload - 1, 1)
    },
    changeTask(state, action: PayloadAction<IPayloadChange>) {
      state.entite[action.payload.id - 1].title = action.payload.newTitle
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subtaskModel.createSubtaskAction, (state, action) => {
        state.entite[action.payload.taskId - 1].uncompletedSubtask += 1
      })
      .addCase(subtaskModel.deleteSubtaskAction, (state, action) => {
        if (action.payload.stateActive) {
          state.entite[action.payload.taskId - 1].completedSubtask += 1
        } else {
          state.entite[action.payload.taskId - 1].uncompletedSubtask -= 1
        }
      })
      .addCase(subtaskModel.changeActiveSubtaskAction, (state, action) => {
        if (action.payload.stateActive) {
          state.entite[action.payload.taskId - 1].completedSubtask += 1
        } else {
          state.entite[action.payload.taskId - 1].completedSubtask -= 1
        }
      })
  },
})
