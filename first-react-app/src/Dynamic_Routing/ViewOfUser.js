import { withRouter } from 'react-router-dom'
function View(props) {
    console.log(props.match.params);
    return (
        <div style={{ backgroundColor: 'pink', borderRadius: 8, padding: 9, margin: 4, fontFamily: 'cursive' }}>
            <h1>View of every user</h1>
            <hr />
            <h2>Id: {props.match.params.id}</h2>
            <h2>Name: {props.match.params.name} </h2>
            <h2>email: {props.match.params.email} </h2>
            <p>Further to show real time data we have to use APIs and database queries for the data <br /> --We will get all the data from database not from the props--</p>
        </div>
    )
}

export default withRouter(View)