import React, { useEffect, useMemo, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const [apidata, setapidata] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = useMemo(() => ({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTVjYmJkZGRmY2FkZDJlMDlhMTRhZmE1NzE4MmFhYyIsIm5iZiI6MTc1NjU3MjE1MC4wODE5OTk4LCJzdWIiOiI2OGIzMjlmNjM1MGMzZWVlZTViNGVmNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kPWlvhto_fA9epxx5UdACFv61ysEKJfCoSxQSml6ORo'
  }
}), []);

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapidata(res.results[0]))
    .catch(err => console.error(err));
  }, [options]);
  
  return (
    <div className='player'>
      <img src={backarrow} alt="" className='back-img' onClick={()=>{navigate(-2)}}/>
      <iframe src={`https://www.youtube.com/embed/${apidata.key}`}
      title='Trailer' frameBorder='0' allowFullScreen className='iframe'></iframe>
      <div className='info'>
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Player