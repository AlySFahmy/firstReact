import React from 'react'
import { Link, useLocation } from 'react-router-dom';


export default function Modal() {
  const location =  useLocation()
  const {src} = location.state
  return<>
      <div className='modal  d-flex justify-content-center align-items-center position-fixed top-0 end-0 start-0 bottom-0 bg-dark bg-opacity-50'>
        <div className="modalItem  position-relative">
            <div>
                <img src={src} alt="Item" className='modalImg w-100' />
            </div>
            <div className='text-center  '>
            <Link to={"/portfolio"} className="fa-solid fa-xmark position-absolute top-0 end-0 p-3 fa-3x text-decoration-none"></Link>
            </div>
           
        </div>
      </div>
  
  
  
  
  </>
}
