import React, { useState } from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'

export default function AddEmployee(props){
    let {path, url} = useRouteMatch("");
    console.log(url);

    let isActive = false;
    let age = 0;
    let name = "";
    let company = "";
    let email = "";
    let [loading, setLoading] = useState(false);

    const addToJSON = () => {
        setLoading(true);
        const newElem = {isActive: isActive, age: age, name: name, company: company, email: email};
        let promise = fetch("http://localhost:3004/employees/",{
            method: "POST",
            body: JSON.stringify(newElem),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        promise.then(() => {
            setLoading(false);
        }).then(() => props.updateEmployees())
        .catch(error => console.log('error', error));
    }

    const activeChanged = (event) => {
        isActive = event.target.checked;
    }

    const ageChanged = (event) => {
        age = parseFloat(event.target.value);
    }

    const nameChanged = (event) => {
        name = event.target.value;
    }

    const companyChanged = (event) => {
        company = event.target.value;
    }

    const emailChanged = (event) => {
        email = event.target.value;
    }

    return(
        <div>
            <br/>
            {loading ? <label>Loading...</label> : <div/>}
            <Switch>
                <Route path={path+"new"}>                   
                    <div>
                        <input type="checkbox" onChange={activeChanged}/>Is active?<br/>
                        <input type="number" placeholder="Age..." onChange={ageChanged}/><br/>
                        <input type="text" placeholder="Name..." onChange={nameChanged}/><br/>
                        <input type="text" placeholder="Company..." onChange={companyChanged}/><br/>
                        <input type="email" placeholder="Email..." onChange={emailChanged}/><br/>
                        <Link to="/">
                            <button onClick={addToJSON}>Save</button>
                            <button>Cancel</button>
                        </Link>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}