import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import Form from "./Form"

export const Welcome = () => 'Welcome'
export const Home = () => 'Home Page'
export const Person = () => <Form/>
export const About = () => 'About us'
export const NotFound = () => 'Not Found'
export const Crud = () => {

    const [persons, setPersons] = useState([]);
    const url = "http://localhost:8080/api/v1/person/";
    const fetchData = () => { axios.get(url).then( (response) => {if(response.status===200) {setPersons(response.data)}} ) };


    useEffect( ()=> { fetchData(); } ,[] );

    return (
        <Table fetchData = {fetchData}  persons = {persons} ></Table>
    );
};
