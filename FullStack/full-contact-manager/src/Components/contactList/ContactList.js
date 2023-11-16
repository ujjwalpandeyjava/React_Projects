import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactCard from '../contactCard/ContactCard';
import './contactList.css';


export default function ContactList(props) {
    // console.log(props);

    const deleteContect = (id) => {
        props.getContactID(id);
    }
    const contactList = props.contactList.length < 1 ? <h1>Nothing here</h1> : props.contactList.map(item => {
        return (
            <ContactCard data={item} key={item.id} clickDeleteContact={deleteContect} />
        )
    });

    return (
        <div className="contactList">
            <NavLink to='/add' style={{ textDecoration: 'none' }}>
                <button style={{
                    padding: '5px 10px', backgroundColor: 'skyblue',
                    border: '1px solid black', display: 'block', marginLeft: '40%'
                }}>Add Contact</button>
            </NavLink>
            {contactList}
        </div>
    );
}