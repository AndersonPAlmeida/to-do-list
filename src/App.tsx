import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ListTasks } from './components/ListTasks';
import { Task } from './components/Task';
import { TaskEmpty } from './components/TaskEmpty';

import './global.css';
import styles from './App.module.css';

export interface TaskType {
  id: string;
  content: string;
  isChecked: boolean;
}

function App() {

  const [textTask, setTextTask] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function onSetTextTask(taskText: string) {
    setTextTask(taskText);
  }

  function saveTask(task: string) {
    if (!textTask) {
      return;
    }
    setTasks([...tasks, {
      id: uuidv4(),
      content: task,
      isChecked: false
    }]);
  }

  function onToggleTask({id, complete}: {id: string, complete: boolean}){
    const updateTasks = tasks.map(task => {
      if(task.id === id) {
        task.isChecked = complete;
        return task;
      }
      return task;
    });
    
    setTasks(updateTasks);
  }

  function onDeleteTask(id: string) {
    const removeOneTask = tasks.filter(task => task.id !== id);

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(removeOneTask);
  }

  const totalTasks = tasks.length;
  const totalTasksCompleted = tasks.reduce((accumulator: number, task: TaskType) => {
    if(task.isChecked) {
      return accumulator += 1;
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
            {
              tasks.length === 0 ? 
                <TaskEmpty /> : 
                tasks.map(task => {
                  return (
                    <Task 
                      key={task.id}
                      task={task}
                      onToggleTask={onToggleTask}
                      onDeleteTask={onDeleteTask}
                    />
                  )
                })
            }
        </ListTasks>
      </div>
    </div>
  )
}

export default App
