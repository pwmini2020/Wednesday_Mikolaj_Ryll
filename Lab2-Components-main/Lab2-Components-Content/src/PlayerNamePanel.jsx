import React from 'react'

export default function PlayerNamePanel(props) {
    return (
        <div>
        <label>Name of Player {props.playerName}: </label>
        <input onChange={props.label_OnKeyPress}></input>
        </div>
    )
}