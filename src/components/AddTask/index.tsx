import { CgAdd } from 'react-icons/cg'
import style from './AddTask.module.css';
import { ChangeEvent } from 'react';

interface Task {
   textTask: string;
   setTextTask: (taskText: string) => void;
   saveTask: (taskText: string) => void;
}

export function AddTask({textTask, setTextTask, saveTask}: Task) {
   function handleTextTask(event: ChangeEvent<HTMLInputElement>) {
      setTextTask(event.target.value);
   }

   function handleCatchTask(){
      saveTask(textTask);
      setTextTask('');
   }

   return (
      <div className={style.taskContainer}>
         <input type="text" name="task" value={textTask} placeholder="Adicione uma nova tarefa" onChange={handleTextTask} id="task"/>
         <button onClick={handleCatchTask}>Criar <CgAdd size={16}/></button>
      </div>
   );
}