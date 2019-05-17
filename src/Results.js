import React from 'react';

const Results = (props) =>(
<div style={{paddingTop:"2em", paddingLeft:"2em"}}>
{props.city && <h3 className="ui big">City: {props.city} </h3>}
{props.temp && <h3>Temperature: {props.temp} {props.unit}</h3>}
{props.humidity && <h3>Humidity: {props.humidity}</h3>}
{props.condition && <h3>Condition: {props.condition} </h3>}

</div>
)
export default Results;
