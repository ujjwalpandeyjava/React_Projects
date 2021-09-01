import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home, About, PageNotFound } from './BasicRoutingExport'
function BasicRouting() {
    return (
        <>
            <div style={{ border: '1px solid gray', margin: 8, borderRadius: 5 }}>
                <h2>Routing example component</h2>
                <Router>
                    {/* All the links should be in anothe component */}
                    <Link to='/'>Home page</Link> | <Link to='/about'>About page</Link> | <Link to='/notAvailablePage'>Fake page</Link>
                    {/*Always use this swicth while using route, bcz it will redirect to first match and lowers' error chances */}
                    <Switch>
                        <Route path='/' exact={true}><Home /></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='*'><PageNotFound /></Route>
                    </Switch>
                </Router>
            </div>
            <div style={{ backgroundColor: 'pink', padding: 7, margin: '160px 7px 7px 7px', borderRadius: 6 }}>
                <span style={{ color: 'red' }}>These are normal components, showing the full details.</span>
                <Home />
                <About />
            </div>
        </>
    );
}

export default BasicRouting