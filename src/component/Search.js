import React, { useState, useEffect } from "react";
import useDebounce from './useDebounce'

function Search(props) {
  const [input, setInput] = useState('')
  const searchValue = useDebounce(input, 1000)

  useEffect(() => {
    console.log(searchValue)
  }, [searchValue])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="" >
      <input onChange={handleChange}></input>
      <div>Debounced Value: {searchValue}</div>
    </div>
  );
}


export default Search