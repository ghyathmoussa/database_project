import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const AllStations = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        let port = 'http://localhost:4000/api/station/findAll'
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
                        Station Number
                    </Col>
                    <Col>
                        City
                    </Col>
                    <Col>
                        Station Name
                    </Col>
                </Row>
                    {data.map(station => (
                        <Row className='row'>
                            <Col className='col-md-3'>
                                {station.snumber}
                            </Col>
                            <Col >
                                {station.city}
                            </Col>
                            <Col className='col-md-3'>
                                {station.sname}
                            </Col>
                        </Row>
                    ))}
            </Container>
        </div>
    );
}

export default AllStations;