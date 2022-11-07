import React from "react"
import { boardModel } from "entities/board"
import { useAppDispatch, useOnClickOutside, useTypesSelector } from "shared/lib"
import { Button, Input, Popup } from "shared/ui"
import { createBoardModel } from "features/create-board"
import styles from "./index.module.scss"

export const PopupBoard = () => {
  const [value, setValue] = React.useState("")
  const popupRef = React.useRef(null)
  const { flagPopup } = useTypesSelector((state) => state.createBoards)
  const dispatch = useAppDispatch()

  useOnClickOutside(popupRef, () => dispatch(createBoardModel.closePopup()))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    dispatch(boardModel.createBoard({ name: value }))
    dispatch(createBoardModel.closePopup())
  }

  return (
    <>
      {flagPopup && (
        <Popup popupRef={popupRef}>
          <form className={styles.form}>
            <h3>Create New Board</h3>
            <div>Title</div>
            <Input
              className={styles.input}
              placeholder="e.g Take Coffee breake"
              value={value}
              onChange={handleChange}
            />
            <Button onClick={handleClick}>Create Board</Button>
          </form>
        </Popup>
      )}
    </>
  )
}
