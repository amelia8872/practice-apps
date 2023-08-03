import React, {useState, useEffect} from "react";
import ReactDom from "react-dom"
import WordList from './components/WordList.jsx'
import WordForm from './components/WordForm.jsx'
import Search from './components/Search.jsx'
import axios from 'axios'
import $ from 'jquery'



const App = () => {



  const [words, setWords] = useState([]);


  const addWord = (newWord, newDef) => {
    axios.post('http://localhost:3000/words', {
      word: newWord,
      definition: newDef
    })
    .then((res) => {
      fetchWords();
    })
    .catch((err) => {
      console.log('Error adding word:', err)
    })
  }

  // const handleDelete = (word.word) => {
  //   axios.delete('http://localhost:3000/words')
  //     .then(() => {
  //       fetchWords();
  //     })
  //     .catch((err) => {
  //       console.log('Error deleting word:', err)
  //     })
  // }


  const fetchWords = () => {
    axios.get('http://localhost:3000/words')
    .then( (res) => {
      console.log(res.data);
      setWords(res.data);
    })
    .catch((err) => {
      console.log('Error fetching words:', err);
    });
  };


  //Runs only on the first render
  useEffect(() => {fetchWords();}, []);

    // //client should post request to server
  // const fetchWords = () => {
  //   $.ajax({
  //     type: 'GET',
  //     url: "http://localhost:3000/words",
  //     success: (data) => {
  //       setWords(data);
  //     },
  //     error: () => {
  //       console.log("GET error");
  //     }

  //   });
  // };


  return (
    <div className="App">
      <h1>My Glossary List</h1>
      <WordList words = {words} />
      <WordForm />
      <Search />
    </div>

  )
}

ReactDom.render(<App />, document.getElementById('root'));

