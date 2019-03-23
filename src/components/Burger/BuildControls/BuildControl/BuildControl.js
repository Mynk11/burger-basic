import React from 'react';
import './BuildCon.css';
const BuildControl = (props) => {

    return (

        <div className="BuildControl" style={{ width: "50%", textAlign: "center", backgroundColor: "#8F5E1E", marginLeft: "18%" }}>
            {props.label}
            <button className="Less" onClick={props.remove} disabled={props.disabledInfo}>Less</button>
            <button onClick={props.added} className="More" >More</button>
        </div>

    );
}

export default BuildControl;