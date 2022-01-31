import './salatinfo.css'
import SalatCard from '../SalatCards/SalatCard';
import {useState,useEffect} from 'react'


function SalatInfo({dataInfos}) {
 // method 1
  //const getDate = () => {
    //hh:mm:ss
    //12:11:10
   // return new date().toLocalTimeString()
 // }
  //end method 1
  //method 2
  let actualTime = new Date().toLocaleTimeString()
  //declare time state
  const [time,setTime] = useState(actualTime)

  useEffect (() =>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)
  },[])
  

  return (
  <div className='salat-info'>
        <div className='time'>
          {time}
        </div>
        {dataInfos ? (
          <SalatCard data={dataInfos} /> 
        ): null
         }
            
        
  </div>
  )
}

export default SalatInfo;
