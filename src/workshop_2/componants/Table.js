import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';

const TableHeader = ()=> {   

    return(
         <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Action</th>
                </tr>
         </thead>       
    )
}

const TableRow = (props) => {
    
    const TabeAction  = (props)=> {
         
        let history = useHistory();
    
        const clickDatails = (id) =>{

            history.push("/persondetails/"+id)   
        }

        const clickDelete=(id)=>{

            axios.delete("http://localhost:8080/api/v1/person/" + id).then((response)=>
            {
            if(response.status===204)
                props.fetchData();
            })

        }
                               
        return (
           <table>
               <tbody>
                   <tr>                    
                      <th>
                        <button  className="btn btn-primary btn-sm" onClick = {()=>clickDatails(props.persons.id)} >Details</button>
                        <button  className="btn btn-success btn-sm">Edit</button>
                        <button  className="btn btn-danger  btn-sm" onClick = {()=>clickDelete(props.persons.id)} >Delete</button>
                       </th>
                   </tr>  
                </tbody>            
            </table>
          )
        
    };

return( 
        <tbody>
            { 
               props.persons.map (
                 item=>
                <tr key={item.id}>
                   <td>{item.id}</td> 
                   <td>{item.firstName} {item.lastName}</td> 
                   <td>{item.email}</td> 
                   <td><TabeAction persons={item}></TabeAction></td>                   
                </tr>             )
            }
       </tbody>
      );
};

const Table = (props) => {
    return (         
        <div className="row" style={{ marginTop: "25px" }}>
            <div className="col-5 offset-3">
                <h4>Person List</h4>
                <table className='table table-striped border'>           
                    <TableHeader/>  
                    <TableRow persons = {props.persons} fetchData = {props.fetchData}/>           
                </table>
            </div>
        </div>
        
      
        
        
        
    );
};
export default Table;