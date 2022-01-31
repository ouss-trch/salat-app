import "./salatcard.css"

function SalatCard({data}) {
    const SALATNAME = Object.keys(data) 

    const date = new Date()
    //parsInt(),getUTCHours(),getUTCMinutes()
    let hour = date.getUTCHours()
    let minute = date.getUTCMinutes()
      //1.get hours and minutes of now
    let time =( hour+1) + ":"+ minute
    
    
    //2.get hours and minutes of data
    //compare hours and minutes
    //use function findIndex foor loop


    let nextSalat = SALATNAME.findIndex((salat) => {
          let splitedDate = data[salat].split(":")
          let salatHour = parseInt(splitedDate[0])
          let salatMinute = parseInt(splitedDate[1] )
          if (salatHour > hour  ) return true
          if (salatHour ===hour){
            if(salatMinute > minute) return true
          }
    } )
    //case of tilme after isha
    if (nextSalat === -1) nextSalat = 0
    //SALAT_NAME  = ["Fadjr","Dhohr","Aasr","Maghrib","Isha"]
    // "data": {
    //     Fajr: "6:40 ",
    //     Duha: "7:55 ",
    //     Dhuhr: "1:00 ",
    //     Asr: "3:45 ",
    //     Maghrib: "6:05",
    //     Isha: "7:20"
    // }
  return (
  <div className="salat-cards">
    {
        SALATNAME.map((salat,index) =>(
            <div className= { `salat ${index === nextSalat ? "active" : null }`} key={index}  >
                <div className="salat-name">{salat} </div>
                <div className="salat-time">{data[salat]} </div>
            </div>


        ) )
    }
      
  </div>
  )
}

export default SalatCard;
