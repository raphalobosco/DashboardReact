import BookingListPast from "../components/BookingListPast"

function BookingsPast(props) {


    const restPast = props.restPast

    return (
        <div>
            <h3>All Recent bookings </h3>
            {restPast.map((restaurant) => {
                return (
                    <BookingListPast key={restaurant.date} rest={{ name: restaurant.name, photo: restaurant.photo, date: restaurant.date }} />
                )
            })}

        </div>
    )
}

export default BookingsPast