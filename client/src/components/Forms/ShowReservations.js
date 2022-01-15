import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const ShowReservation = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        let port = 'http://localhost:4000/api/reservation-show'
        axios.get(port)
            .then(res => {
                setData(res.data.rows);
            })
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Customer ID
                    </Col>
                    <Col>
                        Taxi Plate
                    </Col>
                    <Col>
                        Date
                    </Col>
                </Row>
                    {data.map(taxi => (
                        <Row className='row'>
                            <Col className='col-md-3'>
                                {taxi.cid}
                            </Col>
                            <Col >
                                {taxi.plate}
                            </Col>
                            <Col className='col-md-3'>
                                {`${taxi.tdate.split('-')[0]}-${taxi.tdate.split('-')[1]}-${parseInt(taxi.tdate.split('-')[2].split('T')[0])+1}`}
                            </Col>
                        </Row>
                    ))}
            </Container>
        </div>
    );
}

export default ShowReservation;