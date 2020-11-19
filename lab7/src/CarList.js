import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import EditCar from './EditCar'

export default function CarList()
{
    let {path, url} = useRouteMatch("");
    return (
        <div>
            <h1>Car list:</h1>
            <ul>
                <li>car1</li>
                <li>car2</li>
                <li>car3</li>
                <li>car4</li>
            </ul>
            <Switch>
                <Route path={path + "/new"}>
                    <EditCar/>
                </Route>
            </Switch>
            <button>Add</button>
        </div>
    )
}