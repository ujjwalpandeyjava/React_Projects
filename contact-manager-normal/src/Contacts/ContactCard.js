import React, { Fragment } from 'react'
import './ContactCard.css'

export default function contactCard(props) {
    // console.log(props);
    let fullName = props.individualDetail.firstName.concat(' ').concat(props.individualDetail.lastName)
    return (
        <Fragment>
            <div className='perContact'>
                <span className='displayNone' >{props.id}</span>
                <div className="imageDiv">
                    <div className='upperCase'>{props.individualDetail.firstName.slice(0, 1).concat('.') + props.individualDetail.lastName.slice(0, 1).concat('.')}</div>
                </div>
                <div className="details left">
                    <h2 className='capitalize'>{fullName} </h2>
                    <span>{props.individualDetail.phoneNumber}</span> |
                    <span> <strong>E-mail:</strong> {props.individualDetail.emailAddress}</span>
                    <div className='trashtray'>
                        <i className="far fa-trash-alt fa-2x" onClick={() => props.clickDeleteContact(props.individualDetail.id)}></i>
                        {/* <i className="far fa-edit fa-2x"></i> */}
                    </div>
                </div>
            </div>
        </Fragment >
    );
}
