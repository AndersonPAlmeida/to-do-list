import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ListTasks } from './components/ListTasks';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css';
import { useState } from 'react';

export interface TaskType {
  content: string;
  isChecked: boolean;
}

const tasks: TaskType[] = [];

function App() {

  const [textTask, setTextTask] = useState('');
  // const [isChecked, setIsChecked] = useState(false);

  function onSetTextTask(task: string) {
    setTextTask(task);
  }

  function saveTask(task: string) {
    tasks.push({
      content: task,
      isChecked: false
    });
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <AddTask 
          textTask={textTask} 
          setTextTask={onSetTextTask}
          saveTask={saveTask}
        />
        <ListTasks>
          {tasks.map(task => {
            return (
              <Task 
                key={task.content}
                task={task}
              />
            )
          })}
        </ListTasks>
      </div>
    </div>
  )
}

export default App
