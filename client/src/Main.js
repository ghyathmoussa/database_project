import React, {useState} from "react";
import { NavigationBar, VariantButtonGroup} from "./components";
import { InsertDriverForm, InsertTaxiForm, InsertStationForm, InsertCustomerForm, UpdateTaxiForm, UpdateDriverForm, UpdateStationForm, UpdateCustomerForm, DeleteTaxiForm, DeleteDriverForm, DeleteStationForm, DeleteCustomerForm} from "./components/Forms";

import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Button, Col} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import httpRequest from '../src/httpRequest' // to get api response

const Main = () => {

  const [operation, setOperation] = useState(); 
  const [form, setForm] = useState();
  function selectOperation(e) { 
    setOperation(e.target.name)
  } 

  function selectForm(e){
    setForm(e.target.name)
    httpRequest.get('http://localhost:4000/')
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <div className="mb-4">
      <NavigationBar />
      <div className="container">

      <VariantButtonGroup 
        onClick={selectOperation}
        button1 = "Insert"
        button2 = "Update"
        button3 = "Delete"
        button4 = "Show Data"
      />
      {operation && ( 
      <VariantButtonGroup 
        onClick={selectForm}
        button1 = "Taxi"
        button2 = "Driver"
        button3 = "Station"
        button4 = "Customer"
      /> )} 

      {operation== "Insert" && form == "Taxi" &&  <InsertTaxiForm/>}
      {operation== "Insert" && form == "Driver" &&  <InsertDriverForm/>}
      {operation== "Insert" && form == "Station" &&  <InsertStationForm/>}
      {operation== "Insert" && form == "Customer" &&  <InsertCustomerForm/>}

      {operation== "Update" && form == "Taxi" &&  <UpdateTaxiForm/>}
      {operation== "Update" && form == "Driver" &&  <UpdateDriverForm/>}
      {operation== "Update" && form == "Station" &&  <UpdateStationForm/>}
      {operation== "Update" && form == "Customer" &&  <UpdateCustomerForm/>}


      {operation== "Delete" && form == "Taxi" &&  <DeleteTaxiForm/>}
      {operation== "Delete" && form == "Driver" &&  <DeleteDriverForm/>}
      {operation== "Delete" && form == "Station" &&  <DeleteStationForm/>}
      {operation== "Delete" && form == "Customer" &&  <DeleteCustomerForm/>}

      
      

      
      </div>
    </div>
  );
};
export default Main;