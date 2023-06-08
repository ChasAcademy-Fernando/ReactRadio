import { useEffect, useState } from "react";
import Station from "./station";
const Stations = () => {

    const[radioStations, SetRadioStations] = useState()

    async function getStation() {
        const response = await fetch("https://api.sr.se/api/v2/channels?format=json&size=100");
        const radioData = await response.json();
        SetRadioStations(radioData.channels)
        console.log(radioData)
        
      }

      useEffect(() => {

        
            getStation()
          
        
      },[]);
    return ( 
    <>
        {
            radioStations && radioStations.map((station)=>
            <Station image={station.image} bg={station.color} name={station.name} audio={station.liveaudio.url} key={station.id}/>
            )
        }
        
    </>
     );
}
 
export default Stations;