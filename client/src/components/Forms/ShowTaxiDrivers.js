import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import AllDrivers from './AllDrivers';
import ByID from './ByID';

const ShowTaxiDrivers = (props) => {
    const [allTaxis,setAllTaxis] = useState({
        byID:false,
        withoutID:false
    })
    return (
        <div>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({byID:false,withoutID:true})} >
                    Show All Drivers
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({withoutID:false,byPlate:true})} >
                    Show By ID
                </Button>
            </Row>
            {allTaxis.withoutPlate && <AllDrivers />}
            {allTaxis.byPlate && <ByID />}
        </div>
    );
}
export {ShowTaxiDrivers};
