import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React from 'react'
import ViewOfUser from './ViewOfUser'


function DynamicRouting() {
    let users = [
        { id: 1, name: 'Ujjwal', email: 'ujjwal@test.com' },
        { id: 2, name: 'Rahul', email: 'rahul@test.com' },
        { id: 3, name: 'Suraj', email: 'suraj@test.com' },
        { id: 4, name: 'Arbaaz', email: 'arbaaz@test.com' },
        { id: 5, name: 'Savita', email: 'savita@test.com' },
        { id: 44, name: 'Nitesh', email: 'nitesh@test.com' }
    ]

    return (
        <div>
            Dynamic Routing example component
            <Router>
                {
                    // users.map((item, pos) => <div><Link to={"/user/" + item.id + "/" + item.name + "/" + item.email}><h3>{item.name}</h3></Link></div>)
                    users.map((item, pos) => <div><Link to={"/user/" + item.email}><h3>{item.name}</h3></Link></div>)
                }
                {/* <Route path="/user/:id/:name/:email"><ViewOfUser /></Route> */}
                <Route path="/user/:email"><ViewOfUser /></Route>
            </Router>
        </div >
    );
}


export default DynamicRouting