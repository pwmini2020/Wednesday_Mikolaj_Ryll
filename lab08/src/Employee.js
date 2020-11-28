import React, { useState } from 'react'

export default function Employee(props){
    let [removing, setRemoving] = useState(false)

    const removeEmployee = () => {
        setRemoving(true);
        let promise = fetch("http://localhost:3004/employees/"+props.data.id,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(props.data)
        })
        promise.then(() => {
            props.updateEmployees();
            setRemoving(false);
        })
    }

    return(
        <div>
            {removing ? <div><label>Removing..</label><br/><br/></div> : 
            <div>
                {props.data.name}<br/>
                Company: {props.data.company}<br/>
                email: {props.data.email}<br/>
                {props.data.age} years old<br/>
                <input type="checkbox" checked={props.data.isActive}/><label>is active?</label><br/>
                <button onClick={removeEmployee}>Delete</button><br/><br/>
            </div>
            }
        </div>
    )
}