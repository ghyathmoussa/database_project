import React, { useState } from "react";
import { Form, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import axios from 'axios';

const ByPlate = (props) => {
    const [taxis, setTaxis] = useState([])
    const [data, setData] = useState({
        plate: '',
    })
    const [alert, setAlert] = useState(false)
    function fetchData() {
        const port = 'http://localhost:4000/api/taxi/findOne'

        axios.post(port, data).then(res => {
            console.log(res.data)
            setTaxis(res.data.rows)
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
                        <Form.Control placeholder="Plate Number" name='plate' onChange={(e) => setData({ plate: e.target.value })} />
                        {alert && <Alert key={data.id} variant='danger'>
                            please enter a correct Plate number
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
                        Plate
                    </Col>
                    <Col>
                        Model
                    </Col>
                    <Col>
                        Station Number
                    </Col>
                </Row>
                {taxis.map(taxi => (
                    <Row className='row'>
                        <Col className='col-md-3'>
                            {taxi.plate}
                        </Col>
                        <Col >
                            {taxi.model}
                        </Col>
                        <Col className='col-md-3'>
                            {taxi.snumber}
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default ByPlate;