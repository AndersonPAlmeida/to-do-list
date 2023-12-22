import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ListTasks } from './components/ListTasks';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AddTask />
        <ListTasks>
          <Task />
          <Task />
          <Task />
        </ListTasks>
      </div>
    </>
  )
}

export default App
