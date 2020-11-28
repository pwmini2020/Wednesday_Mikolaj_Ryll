import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import AddEmployee from './AddEmployee'
import Employee from './Employee'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  const updateEmployees = () => {
    setLoading(true);
    let url = "http://localhost:3004/employees";
    let promise = fetch(url);
    promise.then(response => response.json()).then(json => setEmployees(json)).then(()=>setLoading(false))
    .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    setLoading(true);
    let url = "http://localhost:3004/employees";
    let promise = fetch(url);
    promise.then(response => response.json()).then(json => setEmployees(json)).then(()=>setLoading(false))
    .catch(error => console.log('error', error));
  }, [setLoading, setEmployees]);

  return (
    <Router>
        <Route path="/">
          {isLoading ? <label>Loading...</label>
            : <div>
                {console.log(employees)}
                {employees.map(employee => <Employee key={employee.id} data={employee} updateEmployees={updateEmployees}></Employee>)}
                <br/>
                <Link to="/new">
                  <button>Add employee</button>
                </Link>
                <AddEmployee updateEmployees={updateEmployees}></AddEmployee>
              </div>           
          }
        </Route>
    </Router>
  );
}

export default App;
