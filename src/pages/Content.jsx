import styled from "styled-components"
import Account from "./Account"
import BookingsPast from "./BookingsPast"
import BookingsUp from "./BookingsUp"
import Home from "./Home"
import { Route, Routes } from "react-router-dom"


function Content(props) {

  const users = props.users
  const random = props.random
  const restPast = props.restPast
  const restUp = props.restUp

  console.log(restPast)


  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home users={users} random={random} restPast={restPast} restUp={restUp} />} />
        <Route path="/bookingspast" element={<BookingsPast users={users} random={random} restPast={restPast} restUp={restUp} />} />
        <Route path="/bookingsup" element={<BookingsUp users={users} random={random} restPast={restPast} restUp={restUp} />} />
        <Route path="/account" element={<Account users={users} random={random} />} />
      </Routes>

    </main>
  )
}



export default Content