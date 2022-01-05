import React, { useState, useEffect } from 'react';
import { Container, Row, Col} from 'react-bootstrap'
import axios from 'axios';

const AllTaxis = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        let port = 'http://localhost:4000/api/customer/findAll'
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
                </Row>
                    {data.map(customer => (
                        <Row className='row'>
                            <Col>
                                {customer.cid}
                            </Col>
                            <Col >
                                {customer.cname}
                            </Col>
                            <Col>
                                {customer.clname}
                            </Col>
                        </Row>
                    ))}
            </Container>
        </div>
    );
}

export default AllTaxis;