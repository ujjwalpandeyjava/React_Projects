import { Fragment } from "react";

export default function EditContact(props) {
    console.log(props);
    console.log(props.location.state.oldDetails);
    var { email, id, name, phone } = props.location.state.oldDetails;
    return (
        <div className="fulDetails">
            <h2>

                Create form to edit and save data
            </h2>
            <br />
            id: {id}
            <br />name: {name}
            <br />email: {email}
            <br />phone: {phone}

        </div>

    )
}