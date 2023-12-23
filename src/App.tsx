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

function App() {

  const [textTask, setTextTask] = useState('');
  const [tasks, setTasks] = useState([{
    content: 'Tarefa 1',
    isChecked: false
  }]);

  function onSetTextTask(taskText: string) {
    setTextTask(taskText);
  }

  function saveTask(task: string) {
    setTasks([...tasks, {
      content: task,
      isChecked: false
    }]);
  }

  function onIsChecked(content: string){
    const newTasks = tasks.map(task => {
      if(task.content === content) {
        task.isChecked = !task.isChecked;
        return task;
      }
      return task;
    });
    
    setTasks(newTasks);
  }

  function onDeleteTask(content: string) {
    const removeOneTask = tasks.filter(task => task.content !== content);

    setTasks(removeOneTask);
  }

  let totalTasks = tasks.length;
  let totalTasksCompleted = tasks.reduce((accumulator: number, task: TaskType) => {
    if(task.isChecked) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <AddTask 
          textTask={textTask} 
          setTextTask={onSetTextTask}
          saveTask={saveTask}
        />
        <ListTasks
          totalTasks={totalTasks}
          totalTaskCompleted={totalTasksCompleted}
        >
          {tasks.map(task => {
            return (
              <Task 
                key={task.content}
                task={task}
                onIsChecked={onIsChecked}
                onDeleteTask={onDeleteTask}
              />
            )
          })}
        </ListTasks>
      </div>
    </div>
  )
}

export default App
