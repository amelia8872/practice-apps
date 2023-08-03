import React from "react";
import WordEntry from "./WordEntry.jsx";


const WordList = ({words}) => {
  return (

      <ul>
      {words.map((word, index) => <WordEntry word = {word} key = {index} />)}
    </ul>


  )

}

export default WordList;