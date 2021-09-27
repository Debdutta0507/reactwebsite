import React from 'react'
import Card from './Card'


export default function Weatherstyle(props) {
   
      if(!props.repo||props.repo.length==0)
      {
        return(<p>Loading</p>)
      }
      return(
        <div className="container" style={{  
            backgroundImage: "url(" + "https://source.unsplash.com/q4TfWtnz_xw/2000x2000" + ")",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        <div className="row align-items-start">
          <div className="col">
            <Card time={props.repo[0].timepoint} rain={props.repo[0].prec_type} temp={props.repo[0].temp2m} cloud={props.repo[0].cloudcover} speed={props.repo[0].wind10m.speed} direction={props.repo[0].wind10m.direction}/>
         
          </div>
          <div className="col">
            <Card time={props.repo[1].timepoint} rain={props.repo[1].prec_type} temp={props.repo[1].temp2m} cloud={props.repo[1].cloudcover} speed={props.repo[1].wind10m.speed} direction={props.repo[1].wind10m.direction}/>
          </div>
          <div className="col">
            <Card time={props.repo[2].timepoint} rain={props.repo[2].prec_type} temp={props.repo[2].temp2m} cloud={props.repo[2].cloudcover} speed={props.repo[2].wind10m.speed} direction={props.repo[2].wind10m.direction}/>
          </div>
        </div>
        <div className="row align-items-center my-3">
          <div className="col">
            <Card time={props.repo[7].timepoint} rain={props.repo[7].prec_type} temp={props.repo[7].temp2m} cloud={props.repo[7].cloudcover} speed={props.repo[7].wind10m.speed} direction={props.repo[7].wind10m.direction}/>
          </div>
          <div className="col">
            <Card time={props.repo[1].timepoint} rain={props.repo[8].prec_type} temp={props.repo[8].temp2m} cloud={props.repo[8].cloudcover} speed={props.repo[8].wind10m.speed} direction={props.repo[8].wind10m.direction}/>
          </div>
          <div className="col">
            <Card time={props.repo[2].timepoint} rain={props.repo[2].prec_type} temp={props.repo[2].temp2m} cloud={props.repo[2].cloudcover} speed={props.repo[2].wind10m.speed} direction={props.repo[2].wind10m.direction}/>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col">
            <Card time={props.repo[3].timepoint} rain={props.repo[3].prec_type} temp={props.repo[3].temp2m} cloud={props.repo[3].cloudcover} speed={props.repo[3].wind10m.speed} direction={props.repo[3].wind10m.direction}/>
          </div>
          <div className="col">
            <Card time={props.repo[4].timepoint} rain={props.repo[4].prec_type} temp={props.repo[4].temp2m} cloud={props.repo[4].cloudcover} speed={props.repo[4].wind10m.speed} direction={props.repo[4].wind10m.direction}/>
          </div>
          <div className="col">
            <Card time={props.repo[5].timepoint} rain={props.repo[5].prec_type} temp={props.repo[5].temp2m} cloud={props.repo[5].cloudcover} speed={props.repo[5].wind10m.speed} direction={props.repo[5].wind10m.direction}/>
          </div>
        </div>
      </div>
        )
}
