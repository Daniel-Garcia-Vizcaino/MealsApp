import {useState} from 'react'
import {useGlobalContext} from '../context'

const Search = () => {
  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return <header className="search-container">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="type favorite meal" value={text} onChange={handleChange} className="form-input"></input>
      <button type="submit" className="btn">search</button>
      <button type="button" className="btn btn-hipster">surprise me!</button>
    </form>
  </header>
}

export default Search