import React from "react"
import MyButton from "./MyButton"

export default function Player(props) {
    return (
      <div>
        <h2>Player {props.playerNumber}</h2>
        <p>Name: {props.playerName} </p>
        <p>Played number of times: {props.timesPlayed}</p>
        <MyButton active={props.active} button_OnClick={props.button_OnClick}/>
      </div>
    );
}
