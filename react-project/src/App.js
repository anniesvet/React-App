
import styles from './App.css';
import Header from './components/Header';
import Content from "./components/Content"
import Error from './components/Error404';
import CardSlider from './components/ChangeCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
          <Routes>
            <Route path="game" element={<CardSlider />}/>
            <Route exact path="/" element={<Content />}/>
            <Route>
              Ошибка 404! Ничего нет! Лучше посетите главную страничку!
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
