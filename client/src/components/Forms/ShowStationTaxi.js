import React, { useState } from "react";
import { Form, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

const ByPlate = (props) => {
    const [taxis, setTaxis] = useState([])
    const [data, setData] = useState({
        snumber: 0,
      })
      const [alert,setAlert] = useState(false)
      function fetchData() {
        const port = 'http://localhost:4000/api/taxi/finWithOutPlate'
    
        axios.post(port,data).then(res =>{
          console.log(res.data)
          setTaxis(res.data.rows)
          if(res.data.rows.length == 0)
            setAlert(true)
        })
          .catch(err => console.log(err.message))
      }
      console.log(taxis)
    return (
        <div>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log('submitted')
                    fetchData()
                }}
            >
                <Row className="mb-3 bt-3">
                    <Form.Group as={Col}>
                        <Form.Label>Enter the Station Number: </Form.Label>
                        <Form.Control placeholder="Plate Number" name='plate' onChange={(e) => setData({snumber:parseInt(e.target.value)})} />
                        {alert && <Alert key={data.id} variant='danger'>
                            please enter a correct Station number
                        </Alert>}
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Container>
                <Row>
                    <Col>
                        Station Count
                    </Col>
                </Row>
                {taxis.map(taxi => (
                    <Row className='row'>
                        <Col>
                            {taxis[0].station_drivers}
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default ByPlate;