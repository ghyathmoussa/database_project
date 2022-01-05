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
                {data.map(taxi => (
                    <Row>
                        {taxi.taksici_bilgi}
                    </Row>
                ))}
            </Container>
        </div>
    );
}

export default ShowDriverData;