
import React,{useEffect,useState} from 'react'

function App() {
  const [backendData,setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  },[])
  console.log(backendData.users);
  return (
    
    <div>

    {(backendData ==='undefined')?(<p>loading</p>):(backendData.users.map((user,i)=>{
      return <p key={i}>{user}</p>
    }))}
      
    </div>
  )
}

export default App
