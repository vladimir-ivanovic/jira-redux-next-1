import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
import Task from './Task';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(addTask(formJson.taskTitle))
  }

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <form method='POST' onSubmit={ handleAdd }>
        <label>
          Add task name <input name='taskTitle' />
        </label>
        <button type='submit'>Add task</button>
      </form>
    </div>
  );
}

export default TaskList;
