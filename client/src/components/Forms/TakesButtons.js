import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import { Reservation } from "./Reservation";
import ShowReservation from "./ShowReservations";

const TakesButton = () => {
    const [allTakes,setAllTakes] = useState({
        show:false,
        insert:false
    })
    return (
        <div>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTakes({insert:false,show:true})} >
                    Show All Taken Customers
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTakes({show:false,insert:true})} >
                    Reservation
                </Button>
            </Row>
            {allTakes.insert && <Reservation />}
            {allTakes.show && <ShowReservation />}
        </div>
    );
}

export {TakesButton};