import React, { useState } from "react";
import { Form, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

const BySnumber = (props) => {
    const [station, setStation] = useState([])
    const [data, setData] = useState({
        snumber:0,
      })
      const [alert,setAlert] = useState(false)
      function fetchData() {
        const port = 'http://localhost:4000/api/station/findOne'
    
        axios.post(port,data).then(res =>{
          console.log(res.data)
          setStation(res.data.rows)
          if(res.data.rows.length == 0)
            setAlert(true)
        })
          .catch(err => console.log(err.message))
      }
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
                        <Form.Label>Enter the Plate Number of the Taxi You Want to Find</Form.Label>
                        <Form.Control placeholder="Plate Number" name='plate' onChange={(e) => setData({snumber:parseInt(e.target.value)})} />
                        {alert && <Alert key={data.id} variant='danger'>
                            please enter a correct station number
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
                        Station Number
                    </Col>
                    <Col>
                        City
                    </Col>
                    <Col>
                        Station Name
                    </Col>
                </Row>
                {station.map(st => (
                    <Row>
                        <Col>
                            {st.snumber}
                        </Col>
                        <Col >
                            {st.city}
                        </Col>
                        <Col>
                            {st.sname}
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default BySnumber;