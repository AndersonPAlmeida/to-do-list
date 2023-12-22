import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/ListTasks';

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AddTask />
        <Tasks />
      </div>
    </>
  )
}

export default App
