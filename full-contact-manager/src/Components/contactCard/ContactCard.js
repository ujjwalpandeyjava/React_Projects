import { Link } from "react-router-dom";

function ContactCard(props) {
    var { email, id, name, phone } = props.data;

    return (
        <div className="eachContact">
            <Link
                /* This state attribute add the data for the custom link as state.contactDetails */
                to={{ pathname: `/contactDetails/${id}`, state: { contactDetails: props.data } }}
                style={{ textDecoration: 'none', color: 'black', fontWeight: '600', wordSpacing: '6px', letterSpacing: '0.7px' }}>
                Name: {name}<br />
                Eamil: {email}<br />
                Phone number: {phone}
            </Link>
            <div className="deleteIcon">
                <i className="far fa-trash-alt fa-2x" onClick={() => props.clickDeleteContact(id)}></i>
            </div>
            <hr />
        </div >
    );
}
export default ContactCard