import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import AllCustomer from './AllCustomer'
import ByIDCustomer from './ByIDCustomer'

const ShowCustomer = (props) => {
    const [allTaxis,setAllTaxis] = useState({
        byID:false,
        withoutID:false
    })
    return (
        <div>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({byID:false,withoutID:true})} >
                    Show All Customers
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({withoutID:false,byID:true})} >
                    Show By ID
                </Button>
            </Row>
            {allTaxis.withoutID && <AllCustomer />}
            {allTaxis.byID && <ByIDCustomer />}
        </div>
    );
}
export {ShowCustomer};
