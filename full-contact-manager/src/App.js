import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddContact from './Components/addContact/AddContact';
import ContactList from './Components/contactList/ContactList';
import Header from './Components/header/Header';
import ContactDetails from './Components/contactDetails/ContactDetails';
import EditContact from './Components/EditContact';
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
      console.log(item);
      if (item.id === ID) {
        item.name = nameI;
        item.email = emailI; 
        item.phone = phoneI;
      }
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
      <BrowserRouter>
        <Header />
        {/* This Route approach is slow as it used ananomous function which execute on every click */}
        <Switch>
          <Route path="/" exact
            render={(props) => (<ContactList {...props} contactList={contact} getContactID={removeContact} />)}
          />

          <Route path="/add" exact
            component={(props) => <AddContact {...props} addContact={addContact} />}
          />

          {/* Full details of each contact */}
          <Route path="/contactDetails/:id"
            component={ContactDetails} /> {/* //Don't use arrow function while passing the data as object in Link tag */}

          <Route path="/edit/:id/" exact
            component={(props) => <EditContact {...props} updateContact={updateContact} />}
          />
        </Switch>
      </BrowserRouter>
      {/* <AddContact addContact={addContact} /> */}
      {/* <ContactList contactList={contact} getContactID={removeContact} /> */}
    </div>
  );
}
/*
Using Route tag
        1). <Route path="/" exact component={ContactList} />//when we don't have any props to pass in Component
        2). <Route path="/" exact component={
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