import Navbar from "./components/NavBar/Navbar"
import SalatInfo from "./components/SalatInfo/SalatInfo";
import './App.css';
import axios from "axios"
import {useState,useEffect} from "react"

function App() {
  //1-declare state for data from API
  const [data,setData] = useState(null)
  //2-write func fetchData using axios to get salat time from API
  const fetchData = async () => {
    const baseUrl = "http://www.islamicfinder.us/index.php/api/prayer_times"
    const country = "DZ"
    const zipCode = "04002"
    const format='0'
    const endPoint = `${baseUrl}?country=${country}&zipcode=${zipCode}&time_format=${format}`
    try {
      const response = await axios.get(endPoint)
      setData(response.data.results)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=> {
    fetchData()
},[])
  return (
    <div className="App">
      < Navbar  />
      <SalatInfo dataInfos= {data} />

    </div>
  );
}

export default App;
