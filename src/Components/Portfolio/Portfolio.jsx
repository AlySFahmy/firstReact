import React from 'react'
import port1 from './../../imgs/img1.png';
import port2 from './../../imgs/img2.png';
import port3 from './../../imgs/img3.png';
import port4 from './../../imgs/img4.png';
import port5 from './../../imgs/img5.png';
import port6 from './../../imgs/img6.png';
import Child from './Child';
import { Outlet } from 'react-router-dom';

export default function Portfolio() {
    let srcs= [port1,port2,port3,port4,port5,port6]
  return <>
  <div className='text-center pt-5'>
  <h2 className='display-5 fw-bolder'>PORTFOLIO COMPONENT</h2>
    <h2 className='starAfter2 position-relative '> <i className='fa-solid fa-star fa-2xs'></i> </h2> 
  </div>
  <div className='container'>
    <div className="row p-5 gy-5">
        {srcs.map((src , idx)=> <Child key={idx} srcs={src} />)}
    </div>
    <Outlet  />
  </div>
  </>
}
