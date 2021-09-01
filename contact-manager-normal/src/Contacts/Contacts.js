import { Fragment } from "react";
import ContactCard from "./ContactCard";

export default function Contacts(props) {
    console.log(props);
    const deleteContact = (id)=>{
        props.getContactId(id);
    }
    let v = props.contactList.map((item) => <ContactCard individualDetail={item} key={item.id} clickDeleteContact={deleteContact} />);
    return (
        <Fragment>
            <div className="list center" >
                <h2>Contact List</h2><sub>Total Contact(s): <strong>{props.contactList.length}</strong></sub>
                <div className="ContactCard">
                    {v}
                </div>
            </div>
        </Fragment>
    )
}