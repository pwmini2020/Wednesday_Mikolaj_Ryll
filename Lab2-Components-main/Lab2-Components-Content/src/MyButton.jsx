import React from 'react'

export default function MyButton(props){
    if(props.active){ return(<button disabled='true'>This user is playing now</button>)}
    else{ return(<button onClick={props.button_OnClick}>Play</button>)}
}