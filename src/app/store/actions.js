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

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });
export const fetchTasksSuccess = (tasks) => ({ type: FETCH_TASKS_SUCCESS, payload: tasks });
export const fetchTasksFailure = (error) => ({ type: FETCH_TASKS_FAILURE, payload: error });


export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch(fetchTasksRequest());
    try {
      const response = await fetch('http://localhost:5000/tasks');
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      const data = await response.json();
      dispatch(fetchTasksSuccess(data));
    } catch (error) {
      dispatch(fetchTasksFailure(error));
    }
  };
};