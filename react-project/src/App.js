
import styles from './App.css';
import StudyCard from './components/StudyCard';
import Header from './components/Header';
import WordInfo from "./components/WordInfo"

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <StudyCard />
      <WordInfo />
    </div>
  );
}

export default App;
