import React from 'react'


export default function Card(props) {
    return (
        <div className="opacity-2">
            <div   className="card-trasnparent" style={{width: '18rem'}}>
                
                <div className="card-body" style={{backgroundColor: "rgba(245, 245, 245, 0.4)"}}>
                <h5 className="card-title" style={{backgroundColor: "rgba(245, 245, 245, 0.4)"}}>Weather Report at {props.time}</h5>
                <p className="card-text-transparent">Temperature  : { props.temp} </p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Precipitation : { props.rain}</li>
                <li className="list-group-item">Cloud: {props.cloud}</li>
                <li className="list-group-item">WindSpeed and direction :{props.speed}and {props.direction}</li>
                </ul>
                
            </div>

        </div>
    )
}
