import React from 'react'
import Player from './Player'
import PlayerNamePanel from './PlayerNamePanel'
  
export default class GameAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        playerOne: { playerName: "", active: true, timesPlayed: 1},
        playerTwo: { playerName: "", active: false, timesPlayed: 0},
        }
        this.LabelOnKeyPress1 = this.LabelOnKeyPress1.bind(this);
        this.LabelOnKeyPress2 = this.LabelOnKeyPress2.bind(this);
        this.ButtonOnClick1 = this.ButtonOnClick1.bind(this);
        this.ButtonOnClick2 = this.ButtonOnClick2.bind(this);
    }

    LabelOnKeyPress1() {
        this.setState({
        playerOne:{playerName: event.target.value, active: this.state.playerOne.active, timesPlayed: this.state.playerOne.timesPlayed}
        });
    }

    LabelOnKeyPress2() {
        this.setState({
        playerTwo:{playerName: event.target.value, active: this.state.playerTwo.active, timesPlayed: this.state.playerTwo.timesPlayed}
        });
    }

    ButtonOnClick1(){
        this.setState({
          playerOne:{playerName: this.state.playerOne.playerName, active: true, timesPlayed: this.state.playerOne.timesPlayed+1},
          playerTwo:{playerName: this.state.playerTwo.playerName, active: false, timesPlayed: this.state.playerTwo.timesPlayed},   
        })
    }

    ButtonOnClick2(){
        this.setState({
          playerOne:{playerName: this.state.playerOne.playerName, active: false, timesPlayed: this.state.playerOne.timesPlayed},
          playerTwo:{playerName: this.state.playerTwo.playerName, active: true, timesPlayed: this.state.playerTwo.timesPlayed+1},   
        })
    }

    render() {
        return (
        <div>
            <Player playerNumber="One" timesPlayed={this.state.playerOne.timesPlayed} playerName={this.state.playerOne.playerName}
                active ={this.state.playerOne.active} button_OnClick={this.ButtonOnClick1}/>
            <Player playerNumber="Two" timesPlayed={this.state.playerTwo.timesPlayed} playerName={this.state.playerTwo.playerName}
                active ={this.state.playerTwo.active} button_OnClick={this.ButtonOnClick2}/>
            <hr />
            <PlayerNamePanel playerNumber="One" label_OnKeyPress={this.LabelOnKeyPress1} />
            <PlayerNamePanel playerNumber="Two" label_OnKeyPress={this.LabelOnKeyPress2} />
        </div>
        )
    }
}
