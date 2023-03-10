


function Account(props) {

    const users = props.users
    const random = props.random

    return (
        <div>
            <h3>My Details</h3>

            <form className="account-details">
                <input className="full" value={users[random].name} type="text" />
                <input className="half" value={users[random].email} type="text" />
                <input className="half" value={users[random].phone} type="text" />
                <input className="full" value={users[random].address.street} type="text" />
                <input className="half" value={users[random].address.city} type="text" />
                <input className="half" value={users[random].address.zipcode} type="text" />
            </form>
            <button className="btn" type="submit" >Save Details</button>
        </div>
    )
}

export default Account