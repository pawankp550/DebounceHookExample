import React, {useEffect, useState} from 'react'

function useDebounce (value, delay) {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    let timeOutHandler = setTimeout(() => {
      setSearchValue(value)
    }, delay)

    return () => {
      clearTimeout(timeOutHandler)
    }
  }, [value, delay])

  return searchValue
}

export default useDebounce