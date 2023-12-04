import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTask, fetchTasks } from '../store/actions';
import Task from './Task';

function TaskList() {
    // const posts = useSelector((state) => state.posts);
    // const dispatch = useDispatch();
  
    // useEffect(() => {
    //   dispatch(fetchPosts());
    // }, [dispatch]);
  
    // if (posts.loading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (posts.error) {
    //   return <div>Error: {posts.error.message}</div>;
    // }
  
    // return (
    //   <div>
    //     <h1>Posts</h1>
    //     <ul>
    //       {posts.map((post) => (
    //         <li key={post.id}>{post.title}</li>
    //       ))}
    //     </ul>
    //   </div>
    // );
  
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  
  if (tasks.loading) {
    return <div>Loading...</div>;
  }

  if (tasks.error) {
    return <div>Error: {tasks.error.message}</div>;
  }

  const handleAdd = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    dispatch(addTask(formJson.taskTitle))
  }

  // return (
  //   <div>
  //     <h2>Task List</h2>
  //     {tasks.map((task) => (
  //       <Task key={task.id} task={task} />
  //     ))}
  //     <form method='POST' onSubmit={ handleAdd }>
  //       <label>
  //         Add task name <input name='taskTitle' />
  //       </label>
  //       <button type='submit'>Add task</button>
  //     </form>
  //   </div>
  // );

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.data.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
