import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([]);

    const getdata= async()=>{
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
      setUserData(response.data);
      console.log(response.data);
   }

    let printUserData = 'No Data';

    if(userData.length > 0)
      {
      printUserData = userData.map(function(elem,idx){

        return <div className='inline-block object-cover' key={idx}>
          <a href={elem.url} target="_blank" rel="noreferrer">
          <img key={idx} src={elem.download_url} alt="random pics" className='w-96 h-72 m-4 rounded-lg shadow-lg'/>
          <p className='m-4 text-white font-bold  '>Author: {elem.author}</p>
          </a>
          </div>
           })
    }
   return (
    <div className="bg-black min-h-screen w-full text-white">
      <button 
      onClick={getdata}
      className="bg-green-500 hover:bg-blue-700 text-white active:scale-95 font-bold py-2 px-4 rounded">
      Get Data
      </button>

      <div>
        {printUserData}
      </div>
    </div>
  )
}

export default App

