import { GrCalendar } from 'react-icons/gr'



function BookingListUp({ rest }) {




    return (




        <div className='rest-list'>
            <div className="info-rest">
                <img src={rest.photo} alt="" />
                <p className="rest-name">{rest.name}</p>
            </div>
            <div className="booking-date"> <GrCalendar /> {rest.date}</div>
            <div className="actions">
                <a className='link'>Write a review</a>
                <button className='primary'>Book again</button>
            </div>
        </div>



    )
}

export default BookingListUp