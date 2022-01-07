import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';

const ShowDriverData = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        let port = 'http://localhost:4000/api/taxi/taxi-driver-info'
        axios.get(port)
            .then(res => {
                setData(res.data.rows);
            })
    }, [])
    console.log(data)
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Driver Name
                    </Col>
                    <Col>
                        Driver Surname
                    </Col>
                    <Col>
                        City
                    </Col>
                    <Col>
                        Durak
                    </Col>
                </Row>
                {data.map(taxi => (
                    <Row>
                        <Col>{taxi.taksici_bilgi.replace(/[{()}]/g,'').split(',')[0]}</Col>
                        <Col>{taxi.taksici_bilgi.replace(/[{()}]/g,'').split(',')[1]}</Col>
                        <Col>{taxi.taksici_bilgi.replace(/[{()}]/g,'').split(',')[2]}</Col>
                        <Col>{taxi.taksici_bilgi.replace(/[{()}]/g,'').split(',')[3]}</Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default ShowDriverData;