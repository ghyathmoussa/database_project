import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import AllStations from "./AllStations";
import BySnumber from './BySnumber'
import ShowModel from './ShowModel'
import ShowDriverCount from './ShowDriverCount'
import ShowDriverCountBySnumber from './ShowDriverCountBySnumber'

const ShowStations = (props) => {
    const [allTaxis,setAllTaxis] = useState({
        bySnumber:false,
        withoutSnumber:false,
        showModel:false,
        countDriver:false,
        countDriverOneStation:false
    })
    return (
        <div>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    bySnumber:false,
                    withoutSnumber:true,
                    showModel:false,
                    countDriver:false,
                    countDriverOneStation:false
                    })} >
                    Show All Station
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    bySnumber:true,
                    withoutSnumber:false,
                    showModel:false,
                    countDriver:false,
                    countDriverOneStation:false
                })} >
                    Show By ID
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    bySnumber:false,
                    withoutSnumber:false,
                    showModel:true,
                    countDriver:false,
                    countDriverOneStation:false
                })} >
                    Show Model
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    bySnumber:false,
                    withoutSnumber:false,
                    showModel:false,
                    countDriver:true,
                    countDriverOneStation:false
                })} >
                    Show Driver Count in staions
                </Button>
            </Row>
            <Row className="mb-6">
                <Button variant="primary" type="submit" onClick={() => setAllTaxis({
                    bySnumber:false,
                    withoutSnumber:false,
                    showModel:false,
                    countDriver:false,
                    countDriverOneStation:true
                })} >
                    Show Driver Count For One Station 
                </Button>
            </Row>
            {allTaxis.withoutSnumber && <AllStations />}
            {allTaxis.bySnumber && <BySnumber />}
            {allTaxis.showModel && <ShowModel />}
            {allTaxis.countDriver && <ShowDriverCount />}
            {allTaxis.countDriverOneStation && <ShowDriverCountBySnumber />}
        </div>
    );
}
export {ShowStations};
