import React, { } from 'react'
import './contactList.css'
import ContactCard from '../contactCard/ContactCard'
import { Link } from 'react-router-dom';


export default function ContactList(props) {
    // console.log(props);
    //Remove contact
    const deleteContect = (id) => {
        props.getContactID(id);
    }
    const contactlist = props.contactList.map((item, pos) => {
        return (
            <ContactCard data={item} key={item.id} clickDeleteContact={deleteContect} />
        )
    });

    return (
        <div className="contactList">
            <Link to='/add' style={{ textDecoration: 'none' }}>
                <button style={{
                    padding: '5px 10px', backgroundColor: 'skyblue',
                    border: '1px solid black', display: 'block', marginLeft: '40%'
                }}>Add Contact</button>
            </Link>
            {contactlist}
        </div>
    );
}