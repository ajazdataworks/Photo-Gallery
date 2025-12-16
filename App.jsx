import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './Components/Card.jsx'

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

    const getdata= async()=>{
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
      setUserData(response.data);
     }
     useEffect(()=>{
      getdata();
     },[index]);

    let printUserData = <h2 className='top-1/2 left-1/2 absolute translate-x-1/2 translate-y-1/2 text-2xl'>Loading.....</h2>

    if(userData.length > 0)
      {
      printUserData = userData.map(function(elem,idx){

        return <div className='inline-block object-cover' key={idx}>
          <Card elem={elem}/>
          </div>
           })
    }
   return (
    <div className="bg-black min-h-screen w-full text-white">
      <div>
        {printUserData}
      </div>
      <div className='flex justify-center fixed bottom-0 w-full bg-black py-4'>
        <button opacity={index===1?0.5:1}
        className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-4' 
        onClick={()=>{
          if(index>1){
               setIndex(index-1)
               setUserData([])
          }
          }}>
          Previous
        </button>
        <h3 className='flex justify-center items-center'>Page :{index}</h3>
        <button className='bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded m-4'
        onClick={()=>{
        setUserData([])
        setIndex(index+1)}
        }>
        Next
        </button>
      </div>
    </div>
  )
}

export default App

