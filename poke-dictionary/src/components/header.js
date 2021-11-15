import React from "react";
import { Fragment } from "react/cjs/react.production.min";
// import '/cssFiles/header.css'
import './cssFiles/header.css'


function Header(props) {
    return (
        <Fragment>
            I have to change all the detials of this app in order to make the navigation better.
            <div className="navbar vertical-content-center">
                <div className="navbar_inner">
                    <div class="nav-header">
                    JoGeek
                        {/* <div class="nav-title"></div> */}
                    </div>
                    <div className="navbar_links">
                        ul | ul | ul | ul
                    </div>
                    {/* Hi, I am Header of the page. */}
                </div>
            </div>
        </Fragment>
    )
}


export default Header