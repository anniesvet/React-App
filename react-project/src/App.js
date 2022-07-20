import {React, useState, useEffect} from 'react';
import styles from './App.css';
import Header from './components/Header';
import Content from "./components/Content"
import Error from './components/Error404';
import CardSlider from './components/ChangeCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  let [words, setWords]  = useState([]);
  let [isLoading, setIsloading] = useState(false);
  const [hasError, setHasError] = useState(null);


  useEffect(() => {

    setIsloading(true)

    fetch('/api/words')
    .then(response => {
      if (response.ok) { 
          return response.json();
      } else {
          throw new Error('Something went wrong ...');
      }
  })
    .then(response => setWords(response))
    .catch(error => setHasError(error));

    setIsloading(false)
    
  },[])


    let updateWordItem = (values) => {
        console.log(values)
        console.log(words)

        setWords( 
          
          words.map(word => {
            if (word.id === values.id) {
              words = values
            }
            return words
          }
          ),
          
        )

      };

      
      let deleteWordItem = (id) => {
          let newWords = [...words]
          newWords.splice(id, 1)
          setWords(newWords)

          }

    if (isLoading) {
      return <p>Loading ...</p>; 
            }
            
    if (hasError) {
        return <p>Упс, ошибка!</p>;
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
