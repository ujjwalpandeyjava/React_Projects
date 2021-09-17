import { Link } from "react-router-dom";

function ContactCard(props) {
    var { email, id, name, phone } = props.data;
    
    return (
        <div className="eachContact">
            <Link
                to={{ pathname: `/contactDetails/${id}`, state: { contactDetails: props.data } }}
                style={{ textDecoration: 'none' }}>
                Name: {name}<br />
                Eamil: {email}<br />
                Phone Number: {phone}
            </Link>
            <div className="deleteIcon">
                <i className="far fa-trash-alt fa-2x" onClick={() => props.clickDeleteContact(id)}></i>
            </div>
            <hr />
        </div>
    );
}
export default ContactCard