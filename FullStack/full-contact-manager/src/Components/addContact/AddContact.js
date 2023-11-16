import React, { Fragment, useState } from 'react'
import './addContact.css'
import { NavLink } from 'react-router-dom'

export default function AddContact(props) {
    // States to handle data
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const submitForm = e => {
        e.preventDefault();
        if (name === "" || phone === "") {
            alert('Must fill Name and Phone number')
            return;
        }
        console.log('Name: ', name, ' Email: ', email, ' Phone: ', phone,);
        props.addContact(name, email, phone);
        setName('')
        setEmail('')
        setPhone('')
        alert("Added successfully!")
    }
    return (
        <Fragment>
            <div className="left addContact">
                <h2>Add Contact</h2>
                <form className="" onSubmit={submitForm}>
                    <div>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter full-name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="text" placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <input type='submit' value='Add contact' />
                    </div>
                </form>
                <hr />
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <button style={{
                        padding: '5px 10px', backgroundColor: 'skyblue',
                        border: '1px solid black', marginLeft: '20px'
                    }}>Back to Contact List</button>
                </NavLink>
            </div>
        </Fragment>
    )
}