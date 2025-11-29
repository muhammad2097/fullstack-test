import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3000/api/users")
    .then(res => res.json())
    .then(res => {
      setUsers(res);
      console.log(res);
    })

  }, [])

  return (
    <>
    {users.map( => {
      <p>{u}</p>
    })}
      <p>Initial page</p>
    </>
  )
}

export default App
