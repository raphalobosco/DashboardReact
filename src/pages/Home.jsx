import styled from "styled-components"
import BookingListPast from "../components/BookingListPast"
import BookingListUp from "../components/BookingListUp"
import CreditsBox from "../components/CreditsBox"

function Home(props) {

    const users = props.users
    const random = props.random
    const restPast = props.restPast
    const restUp = props.restUp
    console.log(restPast)

    return (
        <div>
            <h2>Hello {users[random].name} 👋</h2>
            <p>{restPast[random].name}</p>
            <Grid>
                <CreditsBox amount={{ value: users[random].credits }} />
            </Grid>

            <h3>Past Bookings</h3>
            {restPast.map((restaurant) => {
                return (

                    <BookingListPast rest={{ name: restaurant.name, photo: restaurant.photo, date: restaurant.date }} />
                )
            })}

            <h3>Upcoming Bookings</h3>
            {restUp.map((restaurant) => {
                return (

                    <BookingListUp rest={{ name: restaurant.name, photo: restaurant.photo, date: restaurant.date }} />
                )
            })}

        </div>
    )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-block: 2rem;
`

export default Home