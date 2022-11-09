interface ITaskData {
  id: number
  boardId: number
  title: string
  status: "TODO" | "DOING" | "DONE"
  uncompletedSubtask: number
  completedSubtask: number
}

export const data: ITaskData[] = [
  {
    id: 1,
    boardId: 1,
    title: "Build UI for onboarding flow",
    status: "TODO",
    uncompletedSubtask: 3,
    completedSubtask: 0,
  },
  {
    id: 2,
    boardId: 1,
    title: "Build UI for search",
    status: "TODO",
    uncompletedSubtask: 3,
    completedSubtask: 0,
  },
  {
    id: 3,
    boardId: 1,
    title: "Build settings UI ",
    status: "TODO",
    uncompletedSubtask: 1,
    completedSubtask: 0,
  },
  {
    id: 4,
    boardId: 1,
    title: "Design settings and search pages",
    status: "DOING",
    uncompletedSubtask: 3,
    completedSubtask: 0,
  },
  {
    id: 5,
    boardId: 1,
    title: "Add account management endpoints",
    status: "DOING",
    uncompletedSubtask: 2,
    completedSubtask: 0,
  },
  {
    id: 6,
    boardId: 1,
    title: "Design onbording flow",
    status: "DOING",
    uncompletedSubtask: 1,
    completedSubtask: 0,
  },
  {
    id: 7,
    boardId: 1,
    title: "Add search endpoints",
    status: "DOING",
    uncompletedSubtask: 2,
    completedSubtask: 0,
  },
  {
    id: 8,
    boardId: 1,
    title: "Conduct 5 wireframe tests",
    status: "DONE",
    uncompletedSubtask: 3,
    completedSubtask: 0,
  },
  {
    id: 9,
    boardId: 1,
    title: "Create wireframe prototype",
    status: "DONE",
    uncompletedSubtask: 4,
    completedSubtask: 0,
  },
]
