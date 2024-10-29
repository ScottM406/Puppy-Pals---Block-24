import './App.css'
import { useState } from 'react';
import {puppyList} from './data.js'

const App = () => {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="App">

    {
      puppies.map((puppy) => {
        return (
        <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        )
      })
    }
      { featPupId && (
        <div className="Feature">
          <h2>{featuredPup.name}</h2>
          <h4>Age: {featuredPup.age}</h4>
          <h4>Email: {featuredPup.email}</h4>
        </div>
)}

    </div>

);
}

export default App
