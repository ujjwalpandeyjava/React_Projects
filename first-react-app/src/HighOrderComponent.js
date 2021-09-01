import { useState } from "react"
//css
const mystyle = {
    height: '100px',
    width: '300px',
    backgroundColor: 'pink',
    margin: '20px',
    borderRadius: '10px',
    padding: '10px'
};

function HighOrderComponent() {
    return (
        <div>
            hoc normal <Compon />
            <HOCRed com={Compon} />
            <HOCGreen com={Compon} />
        </div>
    )
}

//They are just a wrapper class passing as prop and used like tag not in curly braces.
const HOCRed = (props) => <div style={mystyle}> Red counter <br /><props.com /></div>
// or
function HOCGreen(props) {
    return <div style={mystyle}> Green counter <br /><props.com /></div>
}

function Compon() {
    const [count, setCount] = useState(0)
    return (
        <div style={{ backgroundColor: '#e5e5e5', height: '60px', width: '250px', margin: '5px', borderRadius: '10px', padding: '10px' }}>
            Count : {count}
            <p><button onClick={() => setCount(count + 1)}>Increse by one</button></p>
        </div>
    )
}

export default HighOrderComponent