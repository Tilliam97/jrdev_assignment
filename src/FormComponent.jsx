import { useState, useEffect} from 'react'
import axios from 'axios'

function FormComponent() {

  const [searchInput, setSearchInput] = useState('');
  const [beginInput, setBeginSearch] = useState('');
  const [endInput, setEndInput] = useState('');
  const [error, setError] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (!value.trim())
    {
      setError('This field is required!');
    } else{
      setError('');
    }
  };

    const handleBeginChange = (e) => {
    const value = e.target.value;
    setBeginSearch(value);

      if (!value.trim())
      {
        setError('This field is required!');
      } else{
        setError('');
        }
    };

    const handleEndChange = (e) => {
    const value = e.target.value;
    setEndInput(value);

    if (!value.trim() || value == null)
    {
      setError('This field is required!');
    } else{
      setError('');
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search:   
        <input type="text" 
        value = {searchInput}
        placeholder='Mars, Curiosity, Rover'
        onChange={handleSearchChange}/>
      </label>
      <label>  Year Start:  
        <input type="text" 
        value = {beginInput}
        placeholder='1990 - 2026'
        onChange={handleBeginChange}/>
      </label>
      <label>  Year End:  
        <input type="text"
        value = {endInput}
        placeholder='1990 -  2026'
        onChange={handleEndChange}/>
      </label>
      {error && <p>{error}</p>}
      <button type = "submit">Search</button>
    </form>
  )
}

export default FormComponent;
