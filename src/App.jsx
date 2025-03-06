
import styles from './App.module.css';
import ButtonsConatineru from './components/ButtonsContainer';
import Display from './components/Display';

function App() {
  return (
   <div className={styles.calculator}>
       <Display></Display>
       <ButtonsConatineru></ButtonsConatineru>
    </div>
  )
}

export default App
