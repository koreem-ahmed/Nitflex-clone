import React, { useEffect, useMemo, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const [apidata, setapidata] = useState([])
  const cardsRef = useRef();

  const options = useMemo(() => ({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTVjYmJkZGRmY2FkZDJlMDlhMTRhZmE1NzE4MmFhYyIsIm5iZiI6MTc1NjU3MjE1MC4wODE5OTk4LCJzdWIiOiI2OGIzMjlmNjM1MGMzZWVlZTViNGVmNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kPWlvhto_fA9epxx5UdACFv61ysEKJfCoSxQSml6ORo'
  }
}), []);

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => {
    setapidata(res.results);
  })
  .catch(err => console.error(err));
  },[options])

  return (
    <div className='tilte-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index} style={{ textDecoration: 'none' }}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.
                backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

TitleCards.defaultProps = {
  title: 'Popular on Netflix',
};

export default TitleCards