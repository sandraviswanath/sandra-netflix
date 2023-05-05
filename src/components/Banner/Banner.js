import React, { useEffect } from 'react'
import {API_KEY}from'../../axios'
import axios from'../../axios'
import'./Banner.css'
function Banner(){
  useEffect(()=>{
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data)
  })
  },[])
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>movie name</h1>
        <div className='bannerbuttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
        </div>
        <h1 className='discription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </h1>
      </div>
      <div className='fade_bottom'>

      </div>
    </div>
  )
}

export default Banner
