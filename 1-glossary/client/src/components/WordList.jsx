import React from "react";
import WordEntry from "./WordEntry.jsx";


const WordList = ({words,handleDelete,editWord}) => {
  return (

      <ul>
      {words.map((word, index) => <WordEntry word = {word} key = {index} handleDelete={handleDelete} editWord={editWord} />)}
    </ul>


  )

}

export default WordList;