import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Weatherstyle from './Weatherstyle';


export default function Weather() {
    const [repo, setRepo] = useState([]);

    const getRepo = () => axios.get('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0 ')
        .then(response => {
            console.log(response.data.dataseries);
            console.log("hiiiii")
            const myRepo = response.data.dataseries;
            setRepo(myRepo)

        });
    useEffect(() => getRepo(), []);
    return (
        <div>
            {
            <Weatherstyle repo={repo} />
            }
        </div>

    )
}


