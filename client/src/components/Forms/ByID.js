import React, { useState } from "react";
import { Form, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

const ByPlate = (props) => {
    const [drivers, setDrivers] = useState([])
    const [data, setData] = useState({
        id: 0,
    })
    const [alert, setAlert] = useState(false)
    function fetchData() {
        const port = 'http://localhost:4000/api/taxi-driver/findOne'

        axios.post(port, data).then(res => {
            console.log(res.data)
            setDrivers(res.data.rows)
            if (res.data.rows.length == 0)
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
                        <Form.Control placeholder="Plate Number" name='plate' onChange={(e) => setData({ id: parseInt(e.target.value) })} />
                        {alert && <Alert key={data.id} variant='danger'>
                            please enter a correct ID
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
                        id
                    </Col>
                    <Col>
                        name
                    </Col>
                    <Col>
                        surname
                    </Col>
                    <Col>
                        plate
                    </Col>
                    <Col>
                        age
                    </Col>
                </Row>
                {drivers.map(driver => (
                    <Row className='row'>
                        <Col>
                            {driver.id}
                        </Col>
                        <Col>
                            {driver.name}
                        </Col>
                        <Col>
                            {driver.surname}
                        </Col>
                        <Col>
                            {driver.plate}
                        </Col>
                        <Col>
                            {driver.age}
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default ByPlate;