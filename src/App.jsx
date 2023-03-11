import data from './data/users.json'
import Sidebar from './components/Sidebar'
import Content from './pages/Content'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  const users = data.users
  // const random = (Math.floor(Math.random() * users.length))
  const [random, setRandom] = useState(0); // initialize the state variable with 0
  const restPast = users[random].bookings_past
  const restUp = users[random].bookings_up


  const handleRandomChange = () => {
    const newRandom = Math.floor(Math.random() * users.length); // generate a new random value
    setRandom(newRandom); // update the state variable with the new random value
  };




  return (
    <main className='container'>


      <Router>
        <Sidebar users={users} random={random} onRandomChange={handleRandomChange} />
        <Content users={users} random={random} restPast={restPast} restUp={restUp} />
      </Router>
    </main >
  )
}


export default App
