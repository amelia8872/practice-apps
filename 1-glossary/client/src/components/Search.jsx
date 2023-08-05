import React from "react";
import {useState} from "react";


const Search = ({newSearch, searchWord, setNewSearch, searchResult}) => {


  return(
    <div className = 'Search'>
      <form onSubmit={searchWord}>
        <label>Search:</label>
        <br />
        <input type='text' placeholder='Enter a word...' value={newSearch} onChange={(e) => { setNewSearch(e.target.value) }} />
        <button type="submit">Submit</button>
      </form>

        <br></br>


      {searchResult === undefined ? <p>NOT IN THE LIST!</p> : <div className="searchResult">
          <span>{searchResult.word}</span>
          <br></br>
          <span>{searchResult.definition}</span>

        </div>
      }

    </div>
  )
}

export default Search;