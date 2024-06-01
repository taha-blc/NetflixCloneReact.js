import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

    const { id } = useParams();
    // console.log(id)
    const navigate = useNavigate()


    const [apiData, setapiData] = useState({
        name: '',
        key: '',
        published_at: '',
        typeof: '',

    })

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjFlODM1YjBiNWJlMWQ2MGYyOWU1MDBhOWY0Y2JiZiIsInN1YiI6IjY2NTE5MTgxNzBjOGFlYjFmNzk5YTdjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JF6Es3ae92Y0dLYdBzht-5ZqWqOugEGUYga45JgzvT8'
        }
    };


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
            .then(response => response.json())
            .then(response => setapiData(response.results[0]))
            .catch(err => console.error(err));
    }, [])



    return (
        <div className='player'>
            <img onClick={() => { navigate(-2) }} src={back_arrow_icon} alt="" />
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className='player-info'>
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div >
    )
}

export default Player