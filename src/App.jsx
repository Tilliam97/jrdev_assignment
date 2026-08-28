import { useState, useEffect} from 'react'
import axios from 'axios'
import FormComponent from './FormComponent';
import './App.css'

function App() {
  const [apiData, setData] = useState(null);
  const apiKey = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=&apikey=${apiKey}`);
      setData(response.data);
    }catch (error){
      console.error('Error fetching data:', error)
    }

  };
  
  fetchData();
}, []);

  return (
    <div>
      <FormComponent></FormComponent>
      <h2>Nasa API Data</h2>
      
    </div>
  );
};

export default App;
