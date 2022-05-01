
import styles from './App.css';
import StudyCard from './components/StudyCard';
import Header from './components/Header';
import EditReadList from './components/EditReadList';
import ReadList from './components/ReadList';
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
