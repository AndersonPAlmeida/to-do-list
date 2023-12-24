import style from './TaskEmpty.module.css';
import { PiClipboardText } from "react-icons/pi";


export function TaskEmpty(){
   return (
      <div className={style.container}>
         <PiClipboardText size={48}/>
         <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
         </p>
      </div>
   );
}