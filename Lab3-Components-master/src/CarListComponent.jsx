import React from 'react'
import jsonData from './data/cars.json'
import Car from './Car'

var cars = jsonData;

export default class CarListComponent extends React.Component
{
    constructor()
    {
        super();
        this.state = {cars: cars};
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
    }

    onSearchClick()
    {
        var filter = document.getElementById("textBox").value;
        console.log(filter);
        var matchingCars = [];

        cars.forEach(car => {
            if(car.name.startsWith(filter))
            {
                matchingCars.push(car);
            }
        });

        this.setState({
            cars: matchingCars
        })
    }

    onDeleteClick(removedCarName)
    {
        var notRemovedCars = cars.filter(car => car.name !== removedCarName);
        cars = notRemovedCars;
        this.onSearchClick();
    }

    onEditClick(editedCarName, editedCarPrice)
    {
        var item = cars.find(car => car.name === editedCarName);
        if(item)
            item.pricePerDay = editedCarPrice;
    }

    render()
    {
        return(
            <div>
                <div>
                    <input id="textBox" style={{margin: "3em"}}/>
                    <button onClick={this.onSearchClick}>Search</button>
                </div>
                <div>
                    {this.state.cars.map(car => <Car key={car.name} data={car} allCars={cars} deleteFunction={this.onDeleteClick} editFunction={this.onEditClick}/>)}
                </div>
            </div>
        )
    }
}