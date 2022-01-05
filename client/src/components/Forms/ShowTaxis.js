import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import AllTaxis from './AllTaxis'

const ShowTaxis = (props) => {
    const [allTaxis,setAllTaxis] = useState({
        byPlate:false,
        withoutPlate:false
    })
    return (
        <div>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({...allTaxis,withoutPlate:true})} >
                    Show All Taxis
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" >
                    Show By plate
                </Button>
            </Row>
            {allTaxis.withoutPlate && <AllTaxis />}
        </div>
    );
}
export {ShowTaxis};
