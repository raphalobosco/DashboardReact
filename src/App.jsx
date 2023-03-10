import data from './data/users.json'
import Sidebar from './components/Sidebar'
import Content from './pages/Content'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  const users = data.users
  const random = (Math.floor(Math.random() * users.length))

  return (
    <main className='container'>
      <Router>
        <Sidebar users={users} random={random} />
        <Content users={users} random={random} />
      </Router>
    </main>
  )
}

export default App
