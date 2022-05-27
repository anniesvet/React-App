
import styles from './App.css';
import Header from './components/Header';
import Content from "./components/Content"
import Footer from './components/Footer';
import CardSlider from './components/ChangeCards';


function App() {
  return (
    <div className={styles.App}>
      <Header />
      <CardSlider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
