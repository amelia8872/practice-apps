import React from "react";
import {useState} from "react";

const WordEntry = ({word, handleDelete, editWord}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState(word.word);
  const [editedDef, setEditedDef] = useState(word.definition);






  return (
    <li>
      {isEditing ? (
        <>
        <input type='text'  placeholder='Enter the word: ' onChange={(e) => {setEditedWord(e.target.value)}}></input>
        <br></br>
        <textarea type='text'  placeholder='Enter the definition: ' onChange={(e) => {setEditedDef(e.target.value)}}></textarea>
        <button onClick={() => {
          editWord(word._id, {word: editedWord, definition: editedDef});
          setEditedWord('');
          setEditedDef('');
          setIsEditing(false)
          }}>
            Save
        </button>
        </>
      ):(
        <>
        <span>{word.word}</span>
        <br></br>
        <span>{word.definition}</span>
        <br></br>
        <button onClick={() => {setIsEditing(true)}}>Edit</button>
        <button onClick={() => {handleDelete(word._id)}}>Delete</button>
        </>

      ) }
  </li>
  )

}
export default WordEntry;