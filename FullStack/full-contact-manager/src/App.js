import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { uuid } from 'uuidv4';
// import { uuid } from 'v4';
import './App.css';
import EditContact from './Components/EditContact';
import AddContact from './Components/addContact/AddContact';
import ContactDetails from './Components/contactDetails/ContactDetails';
import ContactList from './Components/contactList/ContactList';
import Header from './Components/header/Header';
import homepage from '../package.json'
/*
Used Local storage to store contacts.
not stored in any api/database/file
*/
export default function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contact, setContact] = useState([]);

  const addContact = (name, email, phone) => {
    // console.log('appjs', name, email, phone);
    let con = { name, email, phone };
    setContact([...contact, { id: uuid(), ...con }]);
  };

  let updateContact = (ID, emailI, nameI, phoneI) => {
    // let newData = { ID, nameI, emailI, phoneI };
    // console.log(newData);
    let cont = contact.map(item => {
      if (item.id === ID) {
        item.name = nameI;
        item.email = emailI;
        item.phone = phoneI;
      }
      alert("Updated");
      return item;
    });
    setContact(cont);
  }

  useEffect(() => {
    const contactsRetrieved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (contactsRetrieved)
      setContact(contactsRetrieved)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact))
  }, [contact])

  //To remove a specific contact
  const removeContact = (id) => {
    const newContact = contact.filter((contact) => { return contact.id !== id });
    setContact(newContact);
  }

  return (
    <div>
      {/* \\ BrouserRouter(as Route): what to route? 
          \\ Router > ( Link*X(or anywhere) + Switch*1>(Route[path='/abc']*X) ) Links can be added to any page anywhere*/}
      {console.log(homepage.homepage)}
      <BrowserRouter basename={homepage.homepage}>
        <Header />
        {/* This Route approach is slow as it used ananomous function which execute on every click */}
        <Routes>
          <Route path="/" element={<ContactList contactList={contact} getContactID={removeContact} />} />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
          <Route path="/contactDetails/:id" element={<ContactDetails />} />
          <Route path="/edit/:id/" exact element={<EditContact updateContact={updateContact} />} />
        </Routes>
      </BrowserRouter>
      {/* <AddContact addContact={addContact} /> */}
      {/* <ContactList contactList={contact} getContactID={removeContact} /> */}
    </div>
  );
}
/*
Using Route tag
        1). <Route path="/" exact element={ContactList} />//when we don't have any props to pass in Component
        2). <Route path="/" exact element={
            ()=><ContactList contactList={contact} getContactID={removeContact} />
          } />//When we have props to pass in Component
        3). <Route
            path="/" exact
            render={(props) => (
              <ContactList
                {...props}
                contactList={contact}
                getContactID={removeContact} />
            )}
          />//With this way we can have some more features like props will have 20-25+ more features/functions to access.


*/