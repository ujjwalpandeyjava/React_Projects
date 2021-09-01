import React, { Fragment, useState } from 'react'
import './AddContact.css'

export default function AddContact(props) {
    let [addContactBlock, setAddContactBlock] = useState(true);
    let [id, setId] = useState(undefined)
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [emailAddress, setEmailAddress] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let [notificationContactAdd, setNotificationContactAdd] = useState(false)

    let addMoreContact = (e) => {
        e.preventDefault();
        if (firstName == '' || phoneNumber == '') {
            alert('Must fill all fields');
            return;
        }
        // console.log('from props the add contact handler', props.addContactHandler);
        let newNoDetails = { 'id': id, 'firstName': firstName, 'lastName': lastName, 'emailAddress': emailAddress, 'phoneNumber': phoneNumber }
        props.addContactHandler(newNoDetails)
        // setId(props.nextId)
        setFirstName('')
        setLastName('')
        setEmailAddress('')
        setPhoneNumber('')
        if (!notificationContactAdd)
            setNotificationContactAdd(true)
        setTimeout(() => {
            setNotificationContactAdd(false)
        }, 3000);
        // console.log('Data from form: \nfirstName-', firstName, ' lastName- ', lastName, ' phoneNumber- ', phoneNumber, 'email- ', emailAddress);
    }
    let showButton =
        <div className="center">
            <button onClick={() => setAddContactBlock(false)} className="addBtn">
                <i className="fas fa-plus-circle" ></i>
                Add Contact</button>
        </div>
    let showForm =
        <div className={['addContactMain', 'center'].join(' ')} >
            <button className='close' onClick={() => setAddContactBlock(true)} >X</button>
            <h2 >Add Contact</h2>
            <form className="form" onSubmit={addMoreContact}>
                <div className="field">
                    <label>Name</label>
                    <div className="inputInTwo">
                        <input
                            type='text'
                            name='fName'
                            placeholder="First name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)} />
                        <input
                            type='text'
                            name='lName'
                            placeholder="Last name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    {/* Add this in future https://webdesign.tutsplus.com/tutorials/auto-formatting-input-value--cms-26745 (Automatic formater)*/}
                    <label>Phone Number</label>
                    <input
                        type="text"
                        placeholder="Phone no"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter email'
                        value={emailAddress}
                        onChange={e => setEmailAddress(e.target.value)} />
                </div>
                <div className="field">
                    <button>Add contact</button>
                </div>
            </form>
        </div >
    let notification =
        <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            <strong>Note: </strong> New Contact saved.
        </div>
    return (
        <Fragment>
            {notificationContactAdd ? notification : null}
            {addContactBlock ? showButton : showForm}
        </Fragment>
    )
}