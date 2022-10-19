import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = (props) => {

    let newPerson = null;
    if(props.person!=null) 
    { 
        newPerson = {
        id:props.person.id, title: props.person.title, firstName: props.person.firstName, lastName: props.person.lastName, email: props.person.email}
    };
    const [person, setPerson] = useState(newPerson);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({defaultValues:person});
    const [ setAlert] = useState({type: '', message:''});

    const saveData = (data)=> 
    {
        const url = "http://localhost:8080/api/v1/person/";
        if(props.person!= null)
        {
            axios.put(url, data).then
            ( (response)=>
              {
                if(response.status===204)
                {
                    setAlert({type: 'alert-success', message: 'Done!'}) 
                    setTimeout(()=> { 
                    setAlert({}); props.fetchData(); props.showForm(response.data.id);}, 750);
                }
                else 
                {
                    setAlert({type: 'alert-warning', message: 'APE Error ' + response.status});
                    setTimeout(()=>   { setAlert({}) }, 750);
                }        
              }
            ).catch((errors)=>{
                setAlert( {type: 'alert-danger', message: 'Error'} );
            });          
        }    
        else if (props.person==null)
        {
        axios.post(url, data).then((response)=>
        {
            if(response.status===201)             
            {
                setAlert({type:'alert-success', message:'Person added'});
                setTimeout(()=> { values(); setAlert({ });}, 1250 );
            }
        }).catch((errors)=>{
            if(errors.response.data!==undefined)
            {   
                setAlert({type: errors.response.data.status});               
            }
            else {
                setAlert({type:'alet-danger', message:'error'})
            }
            setTimeout(()=>{
                setAlert({})}, 1500);
        })       

        }       

    }
    const values = () => {
   
        if (props.person == null) {
          setPerson({});
          setValue("firstName", null );
          setValue("lastName", null);
          setValue("email", null);
          setValue("title", null);
        } else if (props.person != null) {
          setValue("firstName", props.person.firstName);
          setValue("lastName", props.person.lastName);
          setValue("email", props.person.email);
          setValue("title", props.person.title);
        }
      };
           
    return (
        <div className="container-fluid">
          
          <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-5 offset-3">
              <h4>Add New Person</h4>            
              <form className="border" style={{ padding: "20px" }} onSubmit={handleSubmit(saveData)} >  

                <div className="form-group">                 
                    <input {...register("firstName", { required: { value: true, message: "Required!" } })}                   
                    type="text"  className="form-control" placeholder="First Name" />
                    {errors.firstName && (<span className="text-danger">{errors.firstName.message} </span> )}
                </div>
                
                <div className="form-group">
                  <label/>
                  <input {...register("lastName", { required: { value: true, message: "Required!" }})} 
                    type="text" className="form-control" placeholder="Last Name" />
                    {errors.lastName && (<span className="text-danger"> {errors.lastName.message} </span>  )}
                </div>

                <label/>
                <div className="form-group">
                  <input hidden {...register("id")}/>
                  <input {...register("email", { required: { value: true, message: "Required!" } })}
                  type="text"  className="form-control" placeholder="Email" />
                  {errors.email && ( <span className="text-danger"> {errors.email.message} </span> )}  
                </div>

                <div className="form-group">
                    <label/>
                    <input {...register("title", { required: { value: true, message: "Required!" }})} type="text" className="form-control" placeholder="Title"/>
                      {errors.title && (<span className="text-danger">{errors.title.message}</span> )}
                </div>

                 <div><label/></div>

                <button type="submit" className="btn btn-success btn-sm">
                  {props.person == null ? "Add Person" : "Update"} </button>  

              </form>
            </div>
          </div>
        </div>
      );
    };
    export default Form;