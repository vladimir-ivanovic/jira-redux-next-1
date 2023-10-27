import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/actions';

function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <p>{task.title}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;