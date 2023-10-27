const initialState = {
    tasks: [{id: 1, title:"first task"}, {id: 2, title:"second task"}],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;