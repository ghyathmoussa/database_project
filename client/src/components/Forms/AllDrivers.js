import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const AllTaxis = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        let port = 'http://localhost:4000/api/taxi-driver/findAll'
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
                    {data.map(driver => (
                        <Row className='row'>
                            <Col>
                                {driver.id}
                            </Col>
                            <Col >
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

export default AllTaxis;