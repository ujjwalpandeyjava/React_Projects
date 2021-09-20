import React, { Fragment } from "react";
import './frag.css'
function Frag(props) {
    const { percent } = props;
    // console.log(props, percent);
    return (
        <Fragment >
            <div className="meter orange nostripes">
                <span style={{ width: percent }}></span>
            </div>
        </Fragment>
    )
}

export default Frag;