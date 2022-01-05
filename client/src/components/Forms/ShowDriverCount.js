import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const AllTaxis = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        let port = 'http://localhost:4000/api/model/showDrivers'
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
                        Counts
                    </Col>
                </Row>
                    {data.map(taxi => (
                        <Row>
                            <Col>
                                {taxi.snumber}
                            </Col>
                            <Col >
                                {taxi.count}
                            </Col>
                        </Row>
                    ))}
            </Container>
        </div>
    );
}

export default AllTaxis;