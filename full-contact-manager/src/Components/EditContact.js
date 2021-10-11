import { Fragment, useState } from "react";

export default function EditContact(props) {
    // console.log(props);
    // console.log(props.location.state.oldDetails);
    var { email, id, name, phone } = props.location.state.oldDetails;
    const [ID, setID] = useState(id);
    const [emailI, setEmailI] = useState(email);
    const [nameI, setNameI] = useState(name);
    const [phoneI, setPhoneI] = useState(phone);

    let submitting = (event) => {
        event.preventDefault();
        console.log(props);
        props.updateContact(ID, emailI, nameI, phoneI);
        // console.log(event);
        console.log("Submited");
        props.history.push("/")
    }

    let theForm = <div>
        <form onSubmit={submitting} className={"center "} style={{ border: "1px solid red", margin: "10px" }}>
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

    return (
        <Fragment>
            <div className="fulDetails">
                <br />ID: {id}
            </div>
            {theForm}
        </Fragment>
    )

}