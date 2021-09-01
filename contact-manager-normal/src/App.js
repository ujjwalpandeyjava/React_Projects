import './App.css';
import { Fragment, useEffect, useState } from 'react';
import Header from './Header/Header'
import Contact from './Contacts/Contacts';
import AddContact from './AddContact/AddContact';
import axios from "axios";

export default function App() {

  let [allDataFromApi, setAllDataFromApi] = useState([])  //to minimize the usage of the api call and setting data from the api
  let [contact, setContact] = useState([])
  let [contact2, setContact2] = useState(() => { return ([]) })
  let [student, setStudent] = useState([])
  let [nextId, setNextId] = useState(null);
  const LOCAL_STORAGE_KEY = 'CONTACTS';
  //getting data
  useEffect(() => {
    // var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://fake-data-person.p.rapidapi.com/api/Persons/GetList',
      params: { count: '100' },
      headers: {
        'x-rapidapi-key': '5bc8c2ef31msh38e9eedb77f0d40p1a4953jsnbc10c4d8ee51',
        'x-rapidapi-host': 'fake-data-person.p.rapidapi.com'
      }
    };
    axios.request('./contact.json')
      .then((response) => {/* 
              console.log('This is the real body our json response returns-->\n', response);
              console.log('file data we uses', response.data, '\nonly personDetails inside data', response.data.personDetails); */
        setContact(response.data.personDetails)
        setAllDataFromApi(response.data)
        setNextId(response.data.personDetails[response.data.personDetails.length - 1].id + 1)
        // console.log('line 35 of app.js for next id -- ', nextId, ' prev is-- ', response.data.personDetails[response.data.personDetails.length - 1].id + 1);
      }).catch(error => console.log("this is error: ", error));

    /*fetch('./contact.json')
        .then(response => response.json())
        .then(data => {
            console.log("ff", data)
            setContact2(data)
        });

    fetch('https://www.hatchways.io/api/assessment/students')
        .then(response => response.json())
        .then(data => {
            console.log('sdfas ', data)
            setStudent(data)
        });

    axios.request(options)
        .then(response => {
            console.log(response.data);
            setContact(response.data)
        })
        .catch(function (error) {
            console.error(error);
        })*/
  }, []);

  //Event Handlers
  const addContactHandler = (newContactDetails) => {
    if (newContactDetails.id === undefined)
      newContactDetails.id = nextId
    setContact([...contact, newContactDetails])
    console.log('new contact list ', contact, 'new contact adding: ', newContactDetails);
    setNextId(nextId + 1)
  }
  const removeContact = (id) => {
    const newContactList = contact.filter((contact) => { return contact.id != id; });
    setContact(newContactList)
  }

  //Storing in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact))
  }, [contact]);
  //Getting the data
  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContact) setContact(retrieveContact);
  }, [])


  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: '7rem', width: '100%' }}>
        <AddContact addContactHandler={addContactHandler} />
      </div>
      <div className='allContacts'>
        <Contact contactList={contact} getContactId={removeContact} />
      </div>
    </Fragment>
  );
}

/*
Colors using:
CDF0EA (Greenish)
F9F9F9 (Creamesh)
F7DBF0 (Pinkish)
BEAEE2 (Purplish)
*/