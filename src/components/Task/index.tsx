import style from './Task.module.css';
import { CgTrash } from "react-icons/cg";
import { TaskType } from '../../App';

interface TaskProps {
   task: TaskType;
   onToggleTask: ({id, complete}: {id: string; complete: boolean}) => void;
   onDeleteTask: (id: string) => void;
}

export function Task({task, onToggleTask, onDeleteTask}: TaskProps) {

   function handleToggleChecked() {
      onToggleTask({id: task.id, complete: !task.isChecked});
   }

   function handleDeleteTask() {
      onDeleteTask(task.id);
   }
   
   return (
      <div className={style.container} id={task.content}>
         <input type="checkbox" name="completionTask" id="completionTask" checked={task.isChecked} onChange={handleToggleChecked}/>
         <p className={style.descriptionTask}>
            {task.content}
         </p>
         <button onClick={handleDeleteTask}>
            <CgTrash size={18}/>
         </button>
      </div>
   );
}