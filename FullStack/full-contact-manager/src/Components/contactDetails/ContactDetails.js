import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function ContactDetails() {
    const { id } = useParams();
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [ID, setID] = useState(id);

    useEffect(() => {
        let contactsStorage = JSON.parse(localStorage.getItem("contacts"))
        contactsStorage.forEach(element => {
            if (element.id === id) {
                setemail(element.email);
                setname(element.name);
                setphone(element.phone);
            }
        });
    }, [])

    return (
        <div className="fulDetails" >
            <div>
                id: {id} <br />
                name: {name}<br />
                phone: {phone}<br />
                email: {email}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <button style={{
                        padding: '5px 10px', backgroundColor: 'skyblue',
                        border: '1px solid black', marginLeft: '20px'
                    }}>Back to Contact List</button>
                </NavLink>
                <NavLink
                    to={{ pathname: `/edit/${ID}`, state: { oldDetails: { id, name, phone, email } } }} >
                    <button style={{
                        padding: '5px 10px', backgroundColor: 'skyblue',
                        border: '1px solid black', marginLeft: '60px'
                    }}><i className="far fa-edit"></i>Edit</button>
                </NavLink>
            </div>
        </div>
    );
}
export default ContactDetails