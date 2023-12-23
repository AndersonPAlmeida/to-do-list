import { ReactNode } from 'react';
import styles from './ListTasks.module.css';

interface Tasks {
   totalTasks: number;
   totalTaskCompleted: number;
   children: ReactNode;
}

export function ListTasks({ totalTasks, totalTaskCompleted, children }: Tasks) {
   return (
      <div>
         <header className={styles.headerTask}>
            <div className={styles.qtdCreateTask}>
               <p>Tarefas criadas</p>
               <span>{totalTasks}</span>
            </div>
            <div className={styles.qtdCreateTask}>
               <p className={styles.secondTitle}>Concluídas</p>
               <span>{totalTaskCompleted} de {totalTasks}</span>
            </div>
         </header>
         <section className={styles.listTak}>
            {children}
         </section>
      </div>
   );
}