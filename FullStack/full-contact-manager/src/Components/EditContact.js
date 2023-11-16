import { Fragment, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function EditContact(props) {
    let { id } = useParams();
    const [emailI, setEmailI] = useState();
    const [nameI, setNameI] = useState();
    const [phoneI, setPhoneI] = useState();
    useEffect(() => {
        let contactsStorage = JSON.parse(localStorage.getItem("contacts"))
        contactsStorage.forEach(element => {
            if (element.id === id) {
                setEmailI(element.email);
                setNameI(element.name);
                setPhoneI(element.phone);
            }
        });
    }, [])

    let submitting = (event) => {
        event.preventDefault();
        props.updateContact(id, emailI, nameI, phoneI);
    }

    return (
        <Fragment>
            <div className="fulDetails">
                <br />ID: {id}
            </div>
            <div>
                <form onSubmit={submitting} className={"center "}>
                    <h1>Edit</h1>
                    <div>
                        <div className="group">
                            <input type="text" value={nameI} onChange={(e) => setNameI(e.target.value)} />
                        </div>
                        <div className="group">
                            <input type="text" value={emailI} onChange={(e) => setEmailI(e.target.value)} />
                        </div>
                        <div className="group">
                            <input type="text" value={phoneI} onChange={(e) => setPhoneI(e.target.value)} />
                        </div>
                        <div className="group">
                            <input type="submit" value="SAVE" />
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            <NavLink to='/' style={{ textDecoration: 'none' }}>
                <button style={{
                    padding: '5px 10px', backgroundColor: 'skyblue',
                    border: '1px solid black', marginLeft: '20px'
                }}>Back to Contact List</button>
            </NavLink>
        </Fragment>
    )

}