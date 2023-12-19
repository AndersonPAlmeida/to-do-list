import { CgAdd } from 'react-icons/cg'
import style from './AddTask.module.css';

export function AddTask() {
   return (
      <div className={style.taskContainer}>
         <input type="text" name="task" placeholder="Adicione uma nova tarefa" id="" />
         <button>Criar <CgAdd size={16}/></button>
      </div>
   );
}