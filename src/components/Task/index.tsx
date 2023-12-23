import style from './Task.module.css';
import { CgTrash } from "react-icons/cg";
import { TaskType } from '../../App';

interface TaskProps {
   task: TaskType;
}

export function Task({task}: TaskProps) {
   return (
      <div className={style.container} id={task.content}>
         <input type="checkbox" name="completionTask" id="completionTask" />
         <p className={style.descriptionTask}>
            {task.content}
         </p>
         <span className={style.containerButton}>
            <button>
               <CgTrash size={18}/>
            </button>
         </span>
      </div>
   );
}