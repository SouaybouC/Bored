import axios from "axios";
import React, { useState, useEffect } from "react";
import Activity from './activity';
import './App.css'
function App() {

  const [activities, setActivity] = useState([]);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    if(count <= 10){
    axios.get('http://www.boredapi.com/api/activity/').then(response => {
      console.log(response.data);  
    setActivity([...activities,response.data]);
    }).catch(error => console.log(error))
    setCount(count +1);
  }
  }, [activities]);


  const handleChange = e =>{
    setSearch(e.target.value)
  }

  const filteredActivities = activities.filter(activity => activity.activity.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="Activity">
      <div className="Activity-search" >
        <h1 className="Activity-text"> Search an activity</h1>
        <form>
          <input type="text" placeholder="Search" className="activity-input" onChange={handleChange}/>
        </form>
      </div>
       {filteredActivities.map(activity => {
       return(
         <Activity key={activity.key} 
         name = {activity.activity} 
         participants = {activity.participants}
         type = {activity.type}
         price = {activity.price}
         link = {activity.link}
       />)
     })}
    </div>
  );
}

export default App;
