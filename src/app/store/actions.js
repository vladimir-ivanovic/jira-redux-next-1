export const addTask = (title) => {
    return {
      type: 'ADD_TASK',
      payload: {
        title,
        id: new Date().getTime(),
      },
    };
  };
  
  export const deleteTask = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: taskId,
    };
  };