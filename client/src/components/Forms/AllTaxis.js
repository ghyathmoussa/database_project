import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const AllTaxis = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        let port = 'http://localhost:4000/api/taxi/findAll'
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
                        Plate
                    </Col>
                    <Col>
                        Model
                    </Col>
                    <Col>
                        Station Number
                    </Col>
                </Row>
                    {data.map(taxi => (
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

export default AllTaxis;