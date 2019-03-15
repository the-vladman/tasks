export const types = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
}

let idTask = 0

export const actionCreators = {
  // ADD TASK
  addTask: (task) => {
    console.log(task);
    return {
      type: types.ADD_TASK,
      id: idTask++,
      title: task.title,
      typeTask: task.type,
      description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
    }
  },
  // REMOVE TASK
  removeTask: (id) => {
    return {
      type: types.REMOVE_TASK,
      id,
    }
  },
}
