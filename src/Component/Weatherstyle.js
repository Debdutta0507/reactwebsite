import React from 'react'
import Card from './Card'


export default function Weatherstyle(props) {
    return (
        <div className="container" style={{  
            backgroundImage: "url(" + "https://source.unsplash.com/q4TfWtnz_xw/2000x2000" + ")",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        <div className="row align-items-start">
          <div className="col">
            <Card time={props.repo[0].timepoint} rain={props.repo[0].prec_type} temp={props.repo[0].temp2m} cloud={props.repo[0].repos.cloudcover} speed={props.repo[0].wind10m.speed} direction={props.repo[0].wind10m.direction}/>
         
          </div>
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
        </div>
        <div className="row align-items-center my-3">
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
        </div>
      </div>
        )
}
