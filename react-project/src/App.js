import {React, useState} from 'react';
import styles from './App.css';
import Header from './components/Header';
import Content from "./components/Content"
import Error from './components/Error404';
import CardSlider from './components/ChangeCards';
import WordInfo from './components/WordInfo';
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

    const updateWordItem = (values) => {
        console.log(values, values.id)
        console.log(words)
        setWords({
          words: words.map(word => {
            if (values.id = word.id) {
              console.log("Привет")
            } return words
          }),
        })
      };

      
      const deleteWordItem = (id) => {
          let newWords = [...words]
          newWords.splice(id, 1)
          setWords(newWords)
          }

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
          <Routes>
            <Route path="game" element={<CardSlider words={words} />}/>
            <Route exact path="/" element={<Content words={words} updateWordItem={updateWordItem} deleteWordItem={deleteWordItem} />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
    }
