
import styles from './App.css';
import StudyCard from './components/StudyCard';
import Header from './components/Header';
import Content from "./components/Content"

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <StudyCard />
      <Content />
    </div>
  );
}

export default App;
