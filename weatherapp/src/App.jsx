import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';




const App = () =>{

  const [data, setData] = useState({})

  const [ location,setLocation] = useState("")

  const searchLocation = (event) =>{
    if(event.key === "Enter") {
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation("")
    } 
  }


  const KEY = 'bdd183e21246b328fde15eb9a0cb0107';
  

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${KEY}&lang=pt_br`;

  return(

    <div className='w-full h-full relative'>

    <div className='text-center p-4'>

    <input type="text" className='py-3 px-6 w-[700px]  text-lg rounded-3xl border border-gray-400  text-gray-500 placeholder:text-gray-400  focus:outline-none bg-white-600 shadow-md' placeholder='Informe a Cidade'  value={location} onChange={(event) => setLocation(event.target.value)}
    onKeyDownCapture={searchLocation}/>     
    </div>
    <Weather weatherData = {data}/> 
  
    </div>


  )

}

export default App;