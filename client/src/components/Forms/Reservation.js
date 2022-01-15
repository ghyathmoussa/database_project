import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col, Alert } from "react-bootstrap";
import axios from 'axios'

const Reservation = () => {
    const [data, setData] = useState({
        plate: '',
        cid: 0
    })
    const [taxis, setTaxis] = useState([])
    const [stations, setStations] = useState([])
    const [alert, setAlert] = useState(false)
    const fetchData = () => {
        const port = 'http://localhost:4000/api/reservation'

        axios.post(port, data).then(res => {
            console.log(res.data.rows)
            // if (res.data.rows.length == 0)
            //     setAlert(true)
        })
            .catch(err => console.log(err.message))
    }
    const check_validation = () => {
        let taxi_port = 'http://localhost:4000/api/taxi/findAll'
        let station_port = 'http://localhost:4000/api/station/findAll'
        //get all taxis
        axios.get(taxi_port)
            .then(res => {
                console.log(res.data.rows)
                setTaxis(res.data.rows);
            }).catch(err => console.log(err))
        // get all stations
        axios.get(station_port)
            .then(res => {
                console.log(res.data.rows)
                setStations(res.data.rows)
            }).catch(err => console.log(err))
        // check if the plate in taxi plates
        if (taxis.includes(data.plate)) {
            setAlert(true)
            return;
        }
        if (stations.includes(data.snumber)) {
            setAlert(true)
            return;
        }
        fetchData()
    }
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
                check_validation()
            }}
        >
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Enter the plate of taxi</Form.Label>
                    <Form.Control placeholder="Plate Number" name='plate' onChange={(e) => setData({ ...data, plate: e.target.value })} />
                    {alert && <Alert key={data.id} variant='danger'>
                        please enter a correct plate
                    </Alert>}
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Enter the Station Number </Form.Label>
                    <Form.Control placeholder="Customer ID" name='cid' onChange={(e) => setData({ ...data, cid: parseInt(e.target.value) })} />
                    {alert && <Alert key={data.id} variant='danger'>
                        please enter a correct customer ID
                    </Alert>}
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export { Reservation }; 