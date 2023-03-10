import styled from "styled-components"
import Account from "./Account"
import Home from "./Home"
import { Route, Routes } from "react-router-dom"


function Content(props) {

  const users = props.users
  const random = props.random


  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home users={users} random={random} />} />
        <Route path="/account" element={<Account users={users} random={random} />} />
      </Routes>

    </Main>
  )
}

const Main = styled.main`
 
		padding: 2rem;
		flex: 1;
		max-width: 80%;
	
`

export default Content