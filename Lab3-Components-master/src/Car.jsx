import React from 'react'

export default class Car extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            name: props.data.name,
            pricePerDay: props.data.pricePerDay,
            seats: props.data.seats,
            image: props.data.image,
            editing: false
        };
        this.deleteFunction = props.onDeleteClick;
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick()
    {
        this.deleteFunction(this.state.name);
    }

    onEditClick()
    {
        if(this.state.editing)
        {
            this.setState({
                editing: false, pricePerDay: document.getElementById("priceTextBox").value
            })
        }
        else
        {
            this.setState({
                editing: true
            })
        }
    }

    render()
    {
        if(this.state.editing)
        {
            return(
            <table style={{border: "3px solid rgb(0,0,0)", margin: "2em", padding: "2em", width: "90%"}}>
                <tr>
                    <td>
                        <img height="150" src={this.state.image}/>
                    </td>
                    <td>
                        <p style={{fontSize:"20px", fontWeight:"bold"}}>{this.state.name}</p>
                    </td>
                    <td>
                        <li>{this.state.seats} seats</li>
                        <li>4 doors</li>
                        <li>air conditioning</li>
                    </td>
                    <td>
                        <p>Price per day</p>
                        <input id="priceTextBox"/>
                        <button onClick={this.onEditClick}>Save</button>
                        <button onClick={this.onDeleteClick}>Delete</button>
                    </td>
                </tr>
            </table>)
        }
        else
        {
            return(
                <table style={{border: "3px solid rgb(0,0,0)", margin: "2em", padding: "2em", width: "90%"}}>
                    <tr>
                        <td>
                            <img height="150" src={this.state.image}/>
                        </td>
                        <td>
                            <p style={{fontSize:"20px", fontWeight:"bold"}}>{this.state.name}</p>
                        </td>
                        <td>
                            <li>{this.state.seats} seats</li>
                            <li>4 doors</li>
                            <li>air conditioning</li>
                        </td>
                        <td>
                            <p>Price per day</p>
                            <p style={{fontWeight: "bold", font: "15px"}}>{this.state.pricePerDay} PLN</p>
                            <button onClick={this.onEditClick}>Edit</button>
                            <button onClick={this.onDeleteClick}>Delete</button>
                        </td>
                    </tr>
                </table>
            );
        }
    }
}