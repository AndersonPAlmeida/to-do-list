import style from './Task.module.css';
import { CgTrash } from "react-icons/cg";

export function Task() {
   return (
      <div className={style.container}>
         <input type="checkbox" name="completionTask" id="completionTask" />
         <p className={style.descriptionTask}>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
         </p>
         <button>
            <CgTrash size={22}/>
         </button>
      </div>
   );
}