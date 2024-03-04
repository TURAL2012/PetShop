import React from 'react'
import './style.scss'
const Banner = ({title, bg}) => {
  return (
    <section className='banner' style={{backgroundImage:`url(${bg})`}}>
           <h1>{title}</h1>
    </section>
  )
}

export default Banner