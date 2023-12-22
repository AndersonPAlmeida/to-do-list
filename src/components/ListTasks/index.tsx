import { ReactNode } from 'react';
import styles from './ListTasks.module.css';

interface Tasks {
   children: ReactNode;
}

export function ListTasks({ children }: Tasks) {
   return (
      <div>
         <header className={styles.headerTask}>
            <div className={styles.qtdCreateTask}>
               <p>Tarefas criadas</p>
               <span>5</span>
            </div>
            <div className={styles.qtdCreateTask}>
               <p className={styles.secondTitle}>Concluídas</p>
               <span>2 de 5</span>
            </div>
         </header>
         <section className={styles.listTak}>
            {children}
         </section>
      </div>
   );
}