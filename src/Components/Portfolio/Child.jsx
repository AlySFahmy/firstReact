import React from 'react'
import { Link } from 'react-router-dom';


export default function Child(props) {
 
    
  return <>
    <div className="col-md-4">
        <figure className='position-relative rounded-3 overflow-hidden'>
        <img src={props.srcs} alt="Item" className='w-100 ' />
        <Link to={"modal"} state={{src : props.srcs}}   className="layer text-decoration-none position-absolute end-0 start-0 top-0 bottom-0 bg-success bg-opacity-75 d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-6x text-white fa-plus"></i>
        </Link>
        </figure>
        



    </div>
  
  </>
}
