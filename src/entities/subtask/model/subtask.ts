import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { data } from "../lib"

const initialState = {
  entite: data,
}

interface IRenameSubtask {
  id: number
  newName: string
}

interface ICreateSubtask {
  taskId: number
  name: string
}

interface IDeleteSubtask {
  subtasksId: number
  taskId: number
  stateActive: boolean
}

interface IChangeActiveSubtask {
  subtasksId: number
  taskId: number
  stateActive: boolean
}

export const createSubtaskAction = createAction<ICreateSubtask>("createSubtask")
export const deleteSubtaskAction = createAction<IDeleteSubtask>("deleteSubtask")
export const changeActiveSubtaskAction = createAction<IChangeActiveSubtask>(
  "changeActiveSubtask"
)

export const subtaskSlice = createSlice({
  name: "subtasks",
  initialState,
  reducers: {
    renameSubtask(state, action: PayloadAction<IRenameSubtask>) {
      state.entite[action.payload.id - 1].name = action.payload.newName
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSubtaskAction, (state, action) => {
        state.entite.push({
          id: state.entite.length + 1,
          taskId: action.payload.taskId,
          name: action.payload.name,
          active: false,
        })
      })
      .addCase(deleteSubtaskAction, (state, action) => {
        state.entite.splice(action.payload.subtasksId - 1, 1)
      })
      .addCase(changeActiveSubtaskAction, (state, action: any) => {
        state.entite[action.payload.subtasksId - 1].active =
          !state.entite[action.payload.subtasksId - 1].active
      })
  },
})
