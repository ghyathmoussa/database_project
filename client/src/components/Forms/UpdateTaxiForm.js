
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col,Alert } from "react-bootstrap";
import axios from 'axios'

const UpdateTaxiForm = (props) => {
  const [data, setData] = useState({
    plate: '',
    model: '',
    snumber: 0
  })
  const [alert,setAlert] = useState(false)
  function fetchData() {
    const port = 'http://localhost:4000/api/taxi/update'
    console.log(data)
    axios.put(port,data).then(res =>{
      console.log(res.data.rows)
      if(res.data.rows.length == 0)
        setAlert(true)
      else
        setAlert(false)
    })
      .catch(err => console.log(err.message))
  }
  return (

    <Form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submitted')
        fetchData()
      }}
    >
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Enter the Plate Number of the Taxi You Want to Update</Form.Label>
          <Form.Control placeholder="Plate Number" name='plate' value={data.plate} onChange={(e) => setData({...data,plate:e.target.value})} />
          {alert && <Alert key={data.id} variant='danger'>
            please enter a correct plate
          </Alert>}
        </Form.Group>
      </Row>

      <h2>New Information</h2>
      <Row className="mb-3">
        {/**
         * no need to change the plate number
         */
         }
        {/* <Form.Group as={Col}>
          <Form.Label>Plate Number</Form.Label>
          <Form.Control placeholder="Plate Number" />
        </Form.Group> */}

        <Form.Group as={Col}>
          <Form.Label>Car Model</Form.Label>
          <Form.Control placeholder="Car Model" name='model' value={data.model} onChange={(e) => setData({...data,model:e.target.value})} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Station Number</Form.Label>
          <Form.Control placeholder="Station Number" name='snumber' value={data.snumber} onChange={(e) => setData({...data,snumber:parseInt(e.target.value)})} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { UpdateTaxiForm };

