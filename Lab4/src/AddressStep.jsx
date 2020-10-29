import { check } from 'prettier';
import React, { useState } from 'react'

export default function AddressStep(props)
{
    const [deliveryStreet, setDeliveryStreet] = useState(props.deliveryStreet);
    const [deliveryZipCode, setDeliveryZipCode] = useState(props.deliveryZipCode);
    const [deliveryCity, setDeliveryCity] = useState(props.deliveryCity);

    const [invoiceStreet, setInvoiceStreet] = useState(props.invoiceStreet);
    const [invoiceZipCode, setInvoiceZipCode] = useState(props.invoiceZipCode);
    const [invoiceCity, setInvoiceCity] = useState(props.invoiceCity);

    const [deliveryStreetValidation, setDeliveryStreetValidation] = useState(props.deliveryStreet!=="");
    const [deliveryZipCodeValidation, setDeliveryZipCodeValidation] = useState(props.deliveryZipCode!=="");
    const [deliveryCityValidation, setDeliveryCityValidation] = useState(props.deliveryCity!=="");

    const [invoiceStreetValidation, setInvoiceStreetValidation] = useState(props.invoiceStreet!=="");
    const [invoiceZipCodeValidation, setInvoiceZipCodeValidation] = useState(props.invoiceZipCode!=="");
    const [invoiceCityValidation, setInvoiceCityValidation] = useState(props.invoiceCity!="");

    const [deliveryValidation, setDeliveryValidation] = useState(false);
    const [deliveryValidationText, setDeliveryValidationText] = useState('');

    const [invoiceValidation, setInvoiceValidation] = useState(false);
    const [invoiceValidationText, setInvoiceValidationText] = useState('');

    const [sameAddressMode, setSameAddressmode] = useState(props.sameAddress);

    const clickPrevious = () => {
        setDeliveryValidation(false);
        setInvoiceValidation(false);
        setDeliveryValidationText('');
        setInvoiceValidationText('');

        props.setDeliveryCity(deliveryCity);
        props.setDeliveryStreet(deliveryStreet);
        props.setDeliveryZipCode(deliveryZipCode);
        props.setInvoiceCity(invoiceCity);
        props.setInvoiceStreet(invoiceStreet);
        props.setInvoiceZipCode(invoiceZipCode);
        props.setSameAddress(sameAddressMode);

        props.previousStep();
    }

    const clickNext = () => {
        if(deliveryCityValidation && deliveryZipCodeValidation && deliveryStreetValidation
            && invoiceCityValidation && invoiceZipCodeValidation && invoiceStreetValidation)
        {
            setDeliveryValidation(false);
            setInvoiceValidation(false);
            setDeliveryValidationText('');
            setInvoiceValidationText('');

            props.setDeliveryCity(deliveryCity);
            props.setDeliveryStreet(deliveryStreet);
            props.setDeliveryZipCode(deliveryZipCode);
            props.setInvoiceCity(invoiceCity);
            props.setInvoiceStreet(invoiceStreet);
            props.setInvoiceZipCode(invoiceZipCode);
            props.setSameAddress(sameAddressMode);

            props.nextStep();
        }
        else
        {
            if(!deliveryCityValidation)
            {
                setDeliveryValidationText("City cannot be empty!")
                setDeliveryValidation(true);
            }
            else if(!deliveryZipCodeValidation)
            {
                setDeliveryValidationText("Invalid zip code!");
                setDeliveryValidation(true);
            }
            else if(!deliveryStreetValidation)
            {
                setDeliveryValidationText("Street cannot be empty!");
                setDeliveryValidation(true);
            }

            if(!invoiceCityValidation)
            {
                setInvoiceValidationText("City cannot be empty!")
                setInvoiceValidation(true);
            }
            else if(!invoiceZipCodeValidation)
            {
                setInvoiceValidationText("Invalid zip code!");
                setInvoiceValidation(true);
            }
            else if(!invoiceStreetValidation)
            {
                setInvoiceValidationText("Street cannot be empty!");
                setInvoiceValidation(true);
            }
            
        }        
    }

    const validateZipCode = (zipCode) => {
        if(zipCode.length!==6) return false;
        if(zipCode[2]!=='-') return false;
        
        for(var i in (0,1,3,4,5))
        {
            if(zipCode[i] < '0' || zipCode[i] > '9')
                return false;
        }

        return true;
    }

    const onChange = () => {
        const sameAddress = !sameAddressMode;
        setSameAddressmode(sameAddress);
        if(sameAddress)
        {
            document.getElementById("streetInput").disabled = true;
            document.getElementById("zipCodeInput").disabled = true;
            document.getElementById("cityInput").disabled = true;
            setInvoiceCity(deliveryCity);
            setInvoiceStreet(deliveryStreet);
            setInvoiceZipCode(deliveryZipCode);
            setInvoiceCityValidation(deliveryCity!=="");
            setInvoiceStreetValidation(deliveryStreet!=="");
            setInvoiceZipCodeValidation(validateZipCode(deliveryZipCode));
        }
        else
        {
            document.getElementById("streetInput").disabled = false;
            document.getElementById("zipCodeInput").disabled = false;
            document.getElementById("cityInput").disabled = false; 
        }
    }

    return(
        <div>
            <form>
                <p>Delivery address</p>
                <input  type="text" placeholder="Street..." value={deliveryStreet} 
                    onChange={sameAddressMode 
                    ? (event) => {setDeliveryStreet(event.target.value); setDeliveryStreetValidation(event.target.value!=='');
                                    setInvoiceStreet(event.target.value); setInvoiceStreetValidation(event.target.value!=='')}
                    : (event) => {setDeliveryStreet(event.target.value); setDeliveryStreetValidation(event.target.value!=='')}} />
                <input  type="text" placeholder="Zip code..." value={deliveryZipCode} 
                    onChange={sameAddressMode
                    ?(event) => {setDeliveryZipCode(event.target.value); setDeliveryZipCodeValidation(validateZipCode(event.target.value));
                                    setInvoiceZipCode(event.target.value); setInvoiceZipCodeValidation(validateZipCode(event.target.value))}
                    :(event) => {setDeliveryZipCode(event.target.value); setDeliveryZipCodeValidation(validateZipCode(event.target.value))}}/>
                <input  type="text" placeholder="City..." value={deliveryCity} 
                    onChange={sameAddressMode
                    ?(event) => {setDeliveryCity(event.target.value); setDeliveryCityValidation(event.target.value!=='')
                                    setInvoiceCity(event.target.value); setInvoiceCityValidation(event.target.value!=='')}
                    :(event) => {setDeliveryCity(event.target.value); setDeliveryCityValidation(event.target.value!=='')}}/>
            </form>           
            {deliveryValidation ? <p style={{color: "red"}}>{deliveryValidationText}</p> : <p/>}

            <form>
                <p>Invoice address</p>
                <input id="streetInput" type="text" placeholder="Street..." value={invoiceStreet} disabled={sameAddressMode}
                    onChange={(event) => {setInvoiceStreet(event.target.value); setInvoiceStreetValidation(event.target.value!=='')}} />
                <input id="zipCodeInput" type="text" placeholder="Zip code..." value={invoiceZipCode} disabled={sameAddressMode}
                    onChange={(event) => {setInvoiceZipCode(event.target.value); setInvoiceZipCodeValidation(validateZipCode(event.target.value))}}/>
                <input id="cityInput" type="text" placeholder="City..." value={invoiceCity} disabled={sameAddressMode}
                    onChange={(event) => {setInvoiceCity(event.target.value); setInvoiceCityValidation(event.target.value!=='')}}/>
            </form>           
            {invoiceValidation ? <p style={{color: "red"}}>{invoiceValidationText}</p> : <p/>}
            <p>Same as delivery address <input id="sameAddressCheckbox" type="checkbox" onChange={onChange} checked={sameAddressMode}/> </p>
            <button onClick={clickPrevious}>Previous</button>
            <button onClick={clickNext}>Next</button>
        </div>
    )
}