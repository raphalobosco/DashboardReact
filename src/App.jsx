import data from './data/users.json'
import Sidebar from './components/Sidebar'
import Content from './pages/Content'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  const users = data.users
  const random = (Math.floor(Math.random() * users.length))
  const restPast = users[random].bookings_past
  const restUp = users[random].bookings_up


  return (
    <main className='container'>


      <Router>
        <Sidebar users={users} random={random} />
        <Content users={users} random={random} restPast={restPast} restUp={restUp} />
      </Router>
    </main >
  )
}

export default App
