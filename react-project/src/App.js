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


      // let updateWordItem = (values) => {
      //   console.log(values)
      //   console.log(words)

      //   setWords( 
          
      //     words.map(word => {
      //       if (word.id === values.id) {
      //         word = values
      //       }
      //       return word
      //     }
      //     ),
          
      //   )

      // };


      // ДОБАВЛЕНИЕ СЛОВА

    let updateWordItem = () => {
            const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                english: words.english,
                russian: words.russian,
                transcription: words.transcription,
                tags: ""
                })
            };
            fetch(`/api/words/add`, requestOptions)
            .then(response => {
            if (response.ok) {
                    response.json();
                } else {
                throw new Error('Something went wrong ...');
            }})
            .then((response) => {
                console.log(response)
            })
            .catch(error => setHasError(error));
        }

        // УДАЛЕНИЕ

        let deleteWordItem = (values) => {
          const requestOptions = {
              method: 'POST',
              body: {
                  id: words.id
                  }
              };
          fetch(`/api/words/22/${words.id}/delete`, requestOptions)
          .then(response => {
              if (response.ok) {
                  response.json();
              } else {
                  throw new Error('Something went wrong ...');
              }})
      }

      
      // let deleteWordItem = (id) => {
      //     let newWords = [...words]
      //     newWords.splice(id, 1)
      //     setWords(newWords)

      //     }

    if (isLoading) {
      return <p>Loading ...</p>; 
            }
            
    if (hasError) {
        return <p>Упс, ошибка вышла!</p>;
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
