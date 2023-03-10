import styled from "styled-components"
import CreditsBox from "../components/CreditsBox"

function Home(props) {

    const users = props.users
    const random = props.random

    return (
        <Grid>
            <CreditsBox amount={{ value: users[random].credits }} />
        </Grid>
    )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export default Home