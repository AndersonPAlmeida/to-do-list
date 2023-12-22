import style from './Task.module.css';
import { CgTrash } from "react-icons/cg";

export function Task() {
   return (
      <div className={style.container}>
         <span className={style.containerCheck}>
            <input type="checkbox" name="completionTask" id="completionTask" />
         </span>
         <p className={style.descriptionTask}>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
         </p>
         <span className={style.containerButton}>
            <button>
               <CgTrash size={18}/>
            </button>
         </span>
      </div>
   );
}