import { NavLink } from "react-router-dom"
import styled from "styled-components"
import BookingListPast from "../components/BookingListPast"
import BookingListUp from "../components/BookingListUp"
import CreditsBox from "../components/CreditsBox"

function Home(props) {

    const users = props.users
    const random = props.random
    const restPast = props.restPast
    const restUp = props.restUp



    return (
        <div>
            <h2>Hello {users[random].name} 👋</h2>
            <p>{restPast[random].name}</p>
            <Grid>
                <CreditsBox amount={{ value: users[random].credits }} />
            </Grid>

            <div className="bookings-list">
                <div className="header-list">

                    <h3 className="title">Recent Bookings </h3>
                    <NavLink to="/bookingspast" className="link" href="">view all ({restPast.length}) </NavLink>
                </div>

                {restPast.slice(0, 2).map((restaurant) => {
                    return (
                        <BookingListPast rest={{ name: restaurant.name, photo: restaurant.photo, date: restaurant.date }} />
                    )
                })}
            </div>

            <div className="bookings-list">
                <div className="header-list">

                    <h3 className="title">Recent Bookings </h3>
                    <NavLink to="/bookingsup" className="link" href="">view all ({restUp.length}) </NavLink>
                </div>
                {restUp.slice(0, 2).map((restaurant) => {
                    return (

                        <BookingListUp rest={{ name: restaurant.name, photo: restaurant.photo, date: restaurant.date }} />
                    )
                })}
            </div>

        </div>
    )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-block: 2rem;
`

export default Home