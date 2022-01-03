import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col, Alert } from "react-bootstrap";
import axios from 'axios'

const DeleteCustomerForm = (props) => {
  const [data, setData] = useState({
    cid: 0
  })
  const [alert,setAlert] = useState(false)
  function fetchData() {
    const port = 'http://localhost:4000/api/customer/delete'

    axios.delete(port, {data:data}).then(res => {
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
          <Form.Label>Enter ID of the Customer You Want to Delete</Form.Label>
          <Form.Control placeholder="ID" name='cid' onChange={(e) => setData({cid:parseInt(e.target.value)})} />
          {alert && <Alert key={data.id} variant='danger'>
            please enter a correct ID
          </Alert>}
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export { DeleteCustomerForm };