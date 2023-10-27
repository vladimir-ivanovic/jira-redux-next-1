import { Provider } from 'react-redux';
import store from '../store/store';
import TaskList from '../components/TaskList';

function Index() {
  return (
    <Provider store={store}>
      <div>
        <h1>My Simplified Jira</h1>
        <TaskList />
      </div>
    </Provider>
  );
}

export default Index;