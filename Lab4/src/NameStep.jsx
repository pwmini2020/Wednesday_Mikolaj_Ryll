import React, {useState} from 'react'

export default function NameStep(props)
{
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);

    const [firstNameValidation, setFirstNameValidation] = useState(props.firstName!=="");
    const [lastNameValidation, setLastNameValidation] = useState(props.lastName!=="");
    const [emailValidation, setEmailValidation] = useState(props.email!=="");

    const [showValidation, setShowValidation] = useState(false);
    const [validationText, setValidationText] = useState('Firstname cannot be empty!');

    const clickNext = () => {
        if(firstNameValidation && lastNameValidation && emailValidation)
        {
            setShowValidation(false);
            setValidationText('');

            props.setFirstName(firstName);
            props.setLastName(lastName);
            props.setEmail(email);

            props.nextStep();
        }
        else 
        {
            setShowValidation(true);
            if(!firstNameValidation)
                setValidationText("First name cannot be empty!");
            else if(!lastNameValidation)
                setValidationText("Last name cannot be empty!");
            else
                setValidationText("Email cannot be empty!");
        }        
    }

    return(
        <div>
            <form>
                <input  type="text" placeholder="First name..." value={firstName} 
                    onChange={(event) => {setFirstName(event.target.value); setFirstNameValidation(event.target.value!=='')}} />
                <input  type="text" placeholder="Last name..." value={lastName} 
                    onChange={(event) => {setLastName(event.target.value); setLastNameValidation(event.target.value!== '')}}/>
                <input  type="email" placeholder="Email..." value={email} 
                    onChange={(event) => {setEmail(event.target.value); setEmailValidation(event.target.value!=='')}}/>
            </form>
            
            {showValidation ? <p style={{color: "red"}}>{validationText}</p> : <p/>}
            <button onClick={clickNext}>Next</button>
        </div>
    )
}