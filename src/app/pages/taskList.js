import { useSelector } from 'react-redux';
import Task from '../components/Task';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;