import React from 'react'

export default function SummaryStep(props)
{
    return(
        <div>
            <h3>Summary:</h3>
            <br/>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <br/>
            <p>Delivery street: {props.deliveryStreet}</p>
            <p>Delivery zip code: {props.deliveryZipCode}</p>
            <p>Delivery city: {props.deliveryCity}</p>
            <br/>
            <p>Invoice street: {props.invoiceStreet}</p>
            <p>Invoice zip code: {props.invoiceZipCode}</p>
            <p>Invoice city: {props.invoiceCity}</p>
            <button onClick={props.previousStep}>Previous</button>
        </div>
    )
}