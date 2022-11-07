import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  flagPopup: false,
}

export const popupSlice = createSlice({
  name: "createBoard",
  initialState,
  reducers: {
    openPopup(state) {
      state.flagPopup = true
    },
    closePopup(state) {
      state.flagPopup = false
    },
  },
})

export const { openPopup, closePopup } = popupSlice.actions
