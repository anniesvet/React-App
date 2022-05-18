
import styles from './App.css';
import StudyCard from './components/StudyCard';
import Header from './components/Header';
import Content from "./components/Content"
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <StudyCard />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
