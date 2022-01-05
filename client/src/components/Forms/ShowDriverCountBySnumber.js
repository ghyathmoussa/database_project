import React, { useState } from "react";
import { Form, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

const ShowDriverCountBySnumber = (props) => {
    const [station, setStation] = useState([])
    const [data, setData] = useState({
        snumber:0,
      })
      const [alert,setAlert] = useState(false)
      function fetchData() {
        const port = 'http://localhost:4000/api/model/showDriversOneStation'
    
        axios.post(port,data).then(res =>{
          console.log(res.data)
          setStation(res.data.rows)
          if(res.data.rows.length == 0)
            setAlert(true)
        })
          .catch(err => console.log(err.message))
      }
      console.log(station)
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
                        Count
                    </Col>
                </Row>
                {station.map(st => (
                    <Row>
                        <Col>
                            {data.snumber}
                        </Col>
                        <Col >
                            {st.station_drivers}
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default ShowDriverCountBySnumber;