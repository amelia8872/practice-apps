import React, {useState, useEffect} from "react";
import ReactDom from "react-dom"
import WordList from './components/WordList.jsx'
import WordForm from './components/WordForm.jsx'
import Search from './components/Search.jsx'
import axios from 'axios'
import $ from 'jquery'



const App = () => {



  const [words, setWords] = useState([]);
  const [newSearch, setNewSearch] = useState('');
  const [searchResult, setSearchResult] = useState({});


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

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/words/${id}`)
      .then(() => {
        fetchWords();
      })
      .catch((err) => {
        console.log('Error deleting word:', err)
      })
  }

  const editWord = (id, newWordObj) => {
    axios.put(`http://localhost:3000/words/${id}`, newWordObj)
      .then(() => {
        fetchWords();
      })
      .catch((err) => {
        console.log('Error editing word:', err);
      })

  }

  const searchWord= (e) => {

    e.preventDefault();
    console.log(newSearch);
    let lowerCaseSearch = newSearch.toLowerCase();
    axios.get(`/search/${lowerCaseSearch}`)
      .then(response => {
        console.log(response.data[0]);
        setSearchResult(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
}


  const fetchWords = () => {
    axios.get('http://localhost:3000/words')
    .then( (res) => {
      // console.log(res.data);
      setWords(res.data);
    })
    .catch((err) => {
      console.log('Error fetching words:', err);
    });
  };


  //Runs only on the first render
  useEffect(() => {fetchWords();}, []);



  return (
    <div className="App">
      <h1>My Glossary List</h1>
      <WordList words = {words} handleDelete={handleDelete} editWord={editWord} />
      <WordForm addWord={addWord} />
      <Search searchWord={searchWord} newSearch = {newSearch} setNewSearch={setNewSearch} searchResult={searchResult} />
    </div>

  )
}

ReactDom.render(<App />, document.getElementById('root'));

