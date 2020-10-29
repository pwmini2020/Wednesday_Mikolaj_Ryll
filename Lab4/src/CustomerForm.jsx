import React, {Component, useState} from 'react'
import NameStep from './NameStep.jsx'
import AddressStep from './AddressStep.jsx'
import SummaryStep from './SummaryStep.jsx'

export default function CustomerForm()
{
    const [activeStep, setActiveStep] = useState(0);
    const nextStep = () => {setActiveStep(activeStep+1)}
    const previousStep = () => {setActiveStep(activeStep-1)}

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryStreet, setDeliveryStreet] = useState('');
    const [deliveryCity, setDeliveryCity] = useState('');
    const [deliveryZipCode, setDeliveryZipCode] = useState('');
    const [invoiceStreet, setInvoiceStreet] = useState('');
    const [invoiceCity, setInvoiceCity] = useState('');
    const [invoiceZipCode, setInvoiceZipCode] = useState('');
    const [sameAddress, setSameAddress] = useState(false);

    return(
        <div>
            {
                activeStep == 0 ? <NameStep nextStep={nextStep} setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail}
                                    firstName={firstName} lastName={lastName} email={email}/> : 
                    activeStep == 1 ? <AddressStep nextStep={nextStep} setDeliveryCity={setDeliveryCity} setDeliveryZipCode={setDeliveryZipCode} 
                                        setDeliveryStreet={setDeliveryStreet} setInvoiceCity={setInvoiceCity} setInvoiceStreet={setInvoiceStreet}
                                        setInvoiceZipCode={setInvoiceZipCode} deliveryCity={deliveryCity} deliveryStreet={deliveryStreet}
                                        deliveryZipCode={deliveryZipCode} invoiceCity={invoiceCity} invoiceStreet={invoiceStreet} 
                                        invoiceZipCode={invoiceZipCode} previousStep={previousStep} sameAddress={sameAddress}
                                        setSameAddress={setSameAddress}/> 
                                    : <SummaryStep firstName={firstName} lastName={lastName} email={email} deliveryCity={deliveryCity}
                                        deliveryZipCode={deliveryZipCode} deliveryStreet={deliveryStreet} invoiceCity={invoiceCity}
                                        invoiceStreet={invoiceStreet} invoiceZipCode={invoiceZipCode} previousStep={previousStep}/>
            }
        </div>
    )
}