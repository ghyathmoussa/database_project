import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import AllTaxis from './AllTaxis'
import ByPlate from './ByPlate'
import ShowStationTaxi from './ShowStationTaxi';
import ShowDriverData from './ShowDriverData';
import ShowTaxiModel from "./ShowTaxiModel";

const ShowTaxis = (props) => {
    const [allTaxis,setAllTaxis] = useState({
        byPlate:false,
        withoutPlate:false,
        showStation:false,
        driverData:false,
        showModel:false
    })
    return (
        <div>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    byPlate:false,
                    withoutPlate:true,
                    showStation:false,
                    driverData:false,
                    showModel:false
                    })} >
                    Show All Taxis
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    byPlate:true,
                    withoutPlate:false,
                    showStation:false,
                    driverData:false,
                    showModel:false
                })} >
                    Show By plate
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    byPlate:false,
                    withoutPlate:false,
                    showStation:true,
                    driverData:false,
                    showModel:false
                })} >
                    Show Station of Taxi
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    byPlate:false,
                    withoutPlate:false,
                    showStation:false,
                    driverData:true,
                    showModel:false
                })} >
                    Show Drivers Data
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    byPlate:false,
                    withoutPlate:false,
                    showStation:false,
                    driverData:false,
                    showModel:true
                })} >
                    Show Show Taxi Model
                </Button>
            </Row>
            {allTaxis.withoutPlate && <AllTaxis />}
            {allTaxis.byPlate && <ByPlate />}
            {allTaxis.showStation && <ShowStationTaxi />}
            {allTaxis.driverData && <ShowDriverData />}
            {allTaxis.showModel && <ShowTaxiModel />}
        </div>
    );
}
export {ShowTaxis};
