import React from "react";
import {useState} from 'react';


const WordForm = ({addWord}) => {
  const [newWord, setNewWord] = useState('');
  const [newDef, setNewDef] = useState('');

  const handleAddWord = () => {
    if (newWord && newDef) {
      addWord(newWord, newDef);
      setNewWord('');
      setNewDef('');
    }
  }


  return (
    <div className='WordForm'>
      <label>Add a word to your list:</label>
      <br></br>
      <input type='text' placeholder='Enter a word...' value={newWord} onChange={(e) => setNewWord(e.target.value)}>
      </input>
      <input type='text' placeholder='Enter the definition...' value={newDef} onChange={(e) => setNewDef(e.target.value)}>
      </input>
      <button onClick={handleAddWord}>
        Add Word
      </button>
    </div>
  )
}
export default WordForm;