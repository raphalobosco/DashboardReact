import BookingListUp from "../components/BookingListUp"

function BookingsUp(props) {

    const users = props.users
    const random = props.random
    const restUp = props.restUp
    return (
        <div>
            <h3>All Upcoming bookings </h3>
            {restUp.map((restaurant) => {
                return (
                    <BookingListUp key={restaurant.date} rest={{ name: restaurant.name, photo: restaurant.photo, date: restaurant.date }} />
                )
            })}

        </div>
    )
}

export default BookingsUp