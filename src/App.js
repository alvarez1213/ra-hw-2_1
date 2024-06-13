import styles from './App.module.css';

import data from './db/db';

import { Portfolio } from './components/Portfolio';


function App() {
  return (
    <div className={styles['content']}>
      <Portfolio
        products={ data }
      />
    </div>
  );
}

export default App;
