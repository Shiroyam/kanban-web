import { createBoardModel } from "features/create-board"
import { useDispatch } from "react-redux"
import { ButtonBoard } from "shared/ui"

export const Button = () => {
  const dispatch = useDispatch()

  const handelClick = () => {
    dispatch(createBoardModel.openPopup())
  }

  return (
    <ButtonBoard onClick={handelClick} themes="create">
      + Create New Board
    </ButtonBoard>
  )
}
