import Button from "./Button"
import { GrHomeRounded, GrUser, GrCalendar, GrHistory } from 'react-icons/gr'
import { FiLogOut } from 'react-icons/fi'
import UserProfile from "./UserProfile"
import CreditsBox from './CreditsBox'
import { NavLink } from "react-router-dom"
import styled from "styled-components"

function Sidebar(props) {

  const users = props.users
  const random = props.random


  return (

    <div className="sidebar">

      <UserProfile profile={{ photo: users[random].photo, name: users[random].name, email: users[random].email }} />
      <div className="links">
        <Btn to="/"><Button btn={{ name: <GrHomeRounded />, label: 'Dashboard' }} /></Btn>
        <Btn to="/account"><Button btn={{ name: <GrUser />, label: 'Profile' }} /></Btn>
        <Button btn={{ name: <GrCalendar />, label: 'Upcoming Bookings' }} />
        <Button btn={{ name: <GrHistory />, label: 'Past Bookings' }} />
      </div>

      <CreditsBox amount={{ value: users[random].credits }} />
      <div className="links">
        <Button btn={{ name: <FiLogOut />, label: 'Logout' }} />
      </div>
    </div>

  )
}


const Btn = styled(NavLink)`
  
    

    &.active {
      background-color: white;
      border-radius: 0.8rem;
      color: #7c63e4;
    }


`


export default Sidebar

