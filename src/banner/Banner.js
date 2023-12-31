import React, { useEffect, useState } from 'react'
import axios from '../fetchingData/axios';
import requests from '../fetchingData/requests';
import "./banner.css"
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
const [movie,setMovie] =useState([])
useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[
            Math.floor(Math.random()*request.data.results.length -1)
        ])
        return request;
    }
    fetchData();
},[])

function trancate(str,n){
    return str?.length > n ? str.substr(0, n - 1)+ "..." : str;
}

    return (
        <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage: `url(
                ${base_url}${movie?.backdrop_path}
            )`,
            backgroundPosition:"center center"
        }}
        >
            <div className='banner__contents'>
            <h1 className='banner_title'>{movie?.title||movie?.name||movie?.orignal_name}</h1>
            <div className='bannar__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__discription'>
                {trancate(movie?.overview,150)}
                </h1>
            </div>
            <div className='banner--fadeBottom'  />
        </header>
    )
}

export default Banner