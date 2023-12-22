import styles from './Tasks.module.css';

export function Tasks(){
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
         <section className='listTask'>
            {/* {children} */}
         </section>
      </div>
   );
}