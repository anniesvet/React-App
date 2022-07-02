import {React, useState} from 'react';
import styles from './App.css';
import Header from './components/Header';
import Content from "./components/Content"
import Error from './components/Error404';
import CardSlider from './components/ChangeCards';
import StudyCard from './components/StudyCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  const [words, setWords]  = useState([
    {id:1, english:"carrot",transcription:"[ ˈkærət ]",russian:"морковь"},
    {id:2, english:"buttefly",transcription:"[ ˈbʌtəflaɪ ]",russian:"бабочка"},
    {id:3, english:"street", transcription:"[ stri:t ]", russian:"улица"},
    {id:4,english:"car",transcription:"[ kɑ: ]",russian:"автомобиль"},
    {id:5,english:"arm",transcription:"[ ɑ:m ]",russian:"рука"},
    {id:6,english:"air",transcription:"[  eər ]",russian:"воздух"},
    {id:7,english:"fox",transcription:"[ fɒks ]",russian:"лиса"},
    {id:8,english:"rabbit",transcription:"[ ˈræbɪt ]",russian:"кролик"},
    {id:9,english:"owl",transcription:"[ aʊl ]",russian:"сова"},
    {id:10,english:"mouse",transcription:"[ maʊs]",russian:"мышь"}
    ])

    function Handle () {
      setWords.words.map((word) => (
        <Content key={word.id} id={word.id} />
    ))
    }


  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
          <Routes>
            <Route path="game" element={<CardSlider words={words} />}/>
            <Route exact path="/" element={<Content words={words} Handle={Handle}/>}/>
            <Route path="*" element={<Error />}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
    }
