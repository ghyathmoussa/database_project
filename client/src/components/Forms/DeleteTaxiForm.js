
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col, Alert } from "react-bootstrap";
import axios from 'axios'

const DeleteTaxiForm = (props) => {
  const [data, setData] = useState({
    plate: '',
  })
  const [alert,setAlert] = useState(false)
  function fetchData() {
    const port = 'http://localhost:4000/api/taxi/delete'

    axios.delete(port,{data:data}).then(res =>{
      console.log(res.data)
      if(res.data.rows.length == 0)
        setAlert(true)
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
          <Form.Label>Enter the Plate Number of the Taxi You Want to Delete</Form.Label>
          <Form.Control placeholder="Plate Number" name='plate' value={data.plate} onChange={(e) => setData(e.target.value)} />
          {alert && <Alert key={data.id} variant='danger'>
            please enter a correct Plate number
          </Alert>}
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { DeleteTaxiForm };