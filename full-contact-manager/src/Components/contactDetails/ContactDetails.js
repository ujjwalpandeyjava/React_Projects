import { Link } from "react-router-dom";

function ContactDetails(props) {
    const { email, id, name, phone } = props.location.state.contactDetails;
    return (
        <div className="fulDetails" >
            <div>
                id: {id} <br />
                name: {name}<br />
                phone: {phone}<br />
                email: {email}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>

                <Link to='/' style={{ textDecoration: 'none' }}>
                    <button style={{
                        padding: '5px 10px', backgroundColor: 'skyblue',
                        border: '1px solid black', marginLeft: '20px'
                    }}>Back to Contact List</button>
                </Link>
                <Link
                    to={{ pathname: `/edit/${id}`, state: { oldDetails: props.location.state.contactDetails } }} >
                    <button style={{
                        padding: '5px 10px', backgroundColor: 'skyblue',
                        border: '1px solid black', marginLeft: '60px'
                    }}><i className="far fa-edit"></i>Edit (not working)</button>
                </Link>
            </div>
        </div>
    );
}
export default ContactDetails