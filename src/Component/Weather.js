import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export default function Weather() {
    const [repo, setRepo] = useState([]);

    const getRepo = () => axios.get('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0 ')
        .then(response => {
            console.log(response.data.dataseries);
            const myRepo = response.data.dataseries;
            setRepo(myRepo)

        });
    useEffect(() => getRepo(), []);
    return (
        <div>
            {/*  {repo.map((repos) => (
                <><p>{repos.timepoint}</p>
                <p>{repos.cloudcover}</p>
                <p>{repos.prec_type}</p>
                <p>{repos.temp2m}</p>
                <p>{repos.wind10m.speed}</p>
                <p>{repos.seeing}</p></>
                <th>#</th>
                        <th>Time</th>
                        <th>Cloud</th>
                        <th>Precipitation</th>
                        <th>Temperature</th>
                        <th>WindSpeed</th>
                        <th>WindDirection</th>

            ))
            } */}
            {
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Cloud</th>
                            <th>Precipitation</th>
                            <th>Temperature</th>
                            <th>WindSpeed</th>
                            <th>WindDirection</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {repo.map((repos, i) => (
                               <tr key={i}>
                             <td>{repos.timepoint}</td>
                                <td>{repos.cloudcover}</td>
                                <td>{repos.prec_type}</td>
                                <td>{repos.temp2m}</td>
                                <td>{repos.wind10m.speed}</td>
                                <td>{repos.wind10m.direction}</td>
                                </tr>
                            ))
                            }


                        
                    </tbody>



                </Table>
            }

        </div>

    )
}

