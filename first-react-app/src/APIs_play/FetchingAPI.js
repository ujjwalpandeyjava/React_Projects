//  Get the Pokemon data from this free ---- Site:- https://pokeapi.co/
import React, { useEffect, useState } from 'react'
import { } from 'react-router-dom'
import axios from 'axios'
function FetchingAPI() {
    let [data, setData] = useState(() => { console.log("setting data in var 'data'"); return ([]) })
    let [jph, setJph] = useState(() => { console.log("setting data in var 'jph"); return ([]) })

    // Never use like this, this is bad practice, and make process time-taking.
    // to get data from api, fetch gives promis thus use use '.then' 2 times

    //API Pokemon (why this is calling 2 times?)
    /*  fetch("https://pokeapi.co/api/v2/pokemon").then((result) => {
         result.json().then((resp) => {
             console.log("Pokemon API return", resp.results)
         })
     }); */

    //Always use like this.
    useEffect(() => {
        /* fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then((response) => {
                response.json().then(res => {
                    setData(res.results); console.log("Pokemon api return (useEffect)", res);
                })
            }) */
        //OR
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                console.log("ff", res.data);
                setData(res.data.results)
            })
            .catch(e => console.warn(e))

    }, []);

    //API JsONPlaceholder
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => { console.log("Json-placeholder api return", json); setJph(json) })
    }, []);
    //Blank array bcz, we want to run it only once (To do same in class-Comopnent we write this all in ComponentDidMount)

    return (
        <div className='App'>
            <h2> Getting APIs, after getting data in state we can use it noramlly.</h2>
            Pokemon api allows 5 calls every few min with fetch.
            <table border='1' style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <th>S.no.</th>
                        <th>Name</th>
                        <th>Full details here</th>
                    </tr>
                    {data.map((individualPokemonDetail, pos) => {
                        return (
                            <tr key={pos}>
                                <td style={{ padding: 5 }}>{pos + 1}</td>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.name}</td>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.url}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <hr />
            <h2> Getting Json Placeholder APIs</h2>
            <table border='1' style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                    {jph.map((individualPokemonDetail, pos) => {
                        return (
                            <tr key={pos}>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.id}</td>
                                <td style={{ padding: 5 }}>{individualPokemonDetail.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchingAPI