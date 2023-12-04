import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from './actions';

const initialState = {
  tasks: {
    data: [],
    loading: true,
    error: null,
  },
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
        case FETCH_TASKS_REQUEST:
          return { ...state, tasks: { ...state.tasks, loading: true, error: null } };
        case FETCH_TASKS_SUCCESS:
          return { ...state, tasks: { ...state.tasks, loading: false, data: action.payload } };
        case FETCH_TASKS_FAILURE:
          return { ...state, tasks: { ...state.tasks, loading: false, error: action.payload } };
      default:
        return state;
    }
  };
  
export default rootReducer;