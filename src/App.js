import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./Components/ThemeContext/ThemeContext";
import Table from 'react-bootstrap/Table';
import Activity from './Components/activity';
import './App.css'
function App() {

  const [activities, setActivity] = useState([]);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);
    // Pour Switcher du mode normal à sombre
    const { toggle } = useContext(ThemeContext);
  useEffect(() => {
    if(count <= 30){
    axios.get('http://www.boredapi.com/api/activity/').then(response => {
      console.log(response.data);  
    setActivity([...activities,response.data]);
    }).catch(error => console.log(error))
    setCount(count +1);
  }
  }, [activities]);


  const handleChange = e =>{
    setSearch(e.target.value)
    console.log('search :', e.target.value)
  }

  const filteredActivities = activities.filter(activity => activity.type.includes(search.toLowerCase()))
  return (
    <div id="Activity" className={toggle ? "mainDivDark" :"mainDiv" }>
      <div className="Activity-search" >
        <h1 className="Activity-text"> Search a type of activity</h1>
        <form>
          <input type="text" placeholder="Search" className="activity-input" onChange={handleChange}/>
        </form>
      </div>
      <Table className="Activity-table" variant={toggle ? "dark" : ""} striped bordered hover size="sm">
      <thead>
        <tr>
          <th>
            Type
          </th>
          <th>
            Name
          </th>
          <th>
            Participants
          </th>
          <th> 
            Price
          </th>
          <th>
            Accessibility
          </th>
        </tr>
      </thead>
      <tbody>
       {filteredActivities.map(activity => {
       return(
         <Activity key={activity.key} 
         name = {activity.activity} 
         participants = {activity.participants}
         type = {activity.type}
         price = {(activity.price * 100).toFixed()} 
         link = {(activity.accessibility *100).toFixed()}
       />)
     })}
     </tbody>
     </Table>
    </div>
  );
}

export default App;
