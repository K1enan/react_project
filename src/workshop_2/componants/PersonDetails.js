import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const PersonDetails = () => {

let history = useHistory();
const Back = () => history.goBack();
  
     
        let params = useParams();
        const [person, setPerson] = useState({});       
        useEffect(() => {
          const url = "http://localhost:8080/api/v1/person/"+params.id;
          axios.get(url).then((response) => {
            if (response.status === 200) {
              setPerson(response.data);
            }
          });
        });
                  

return (
  <div className="col-5 offset-3">
      <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}><h5>Person information</h5></nav>
      <br/>
      <h5>{person.title}</h5>
      <p>Id:      {person.id}</p> 
      <p>Name:    {person.firstName} {person.lastName}</p>
      <p>Email:   {person.email}</p> 
      <button className="btn btn-outline-danger" onClick={Back}>Back</button>
  </div>
)
};
export default PersonDetails;