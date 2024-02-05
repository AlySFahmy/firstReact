import React from 'react'



export default function Contact() {
  function validtionEmail(e) {
    let regex = /^.+@.+\.com$/i;
    return regex.test(e.value.trim());
  }
  function validEmail (e){
    if(e.value.length!==0){
      e.previousElementSibling.style.opacity=1;
    if(validtionEmail(e)===true){
     e.nextElementSibling.style.opacity=0;
    }
    else{
      e.nextElementSibling.style.opacity=1;
    }
     }
     else{
       e.previousElementSibling.style.opacity=0;
     e.nextElementSibling.style.opacity=0;
     }
   
  }

  function chlekInput (e){
    if(e.value.length!==0){
     e.previousElementSibling.style.opacity=1;
    }
    else{
      e.previousElementSibling.style.opacity=0;
    }
  }
 
  return <>
  <div className="contact text-center py-5 container">

  <h2 className='display- fw-bolder'>CONTACT SECTION</h2>
    <h2 className='starAfter2 position-relative '> <i className='fa-solid fa-star fa-2xs'></i> </h2>
    <div className="form text-start w-50 mx-auto">
        <div className='py-4 border-bottom border-1 '>
        <p className='ps-3 text-success labelform'>
        Name
        </p>
        <input onKeyUp={(e)=>chlekInput(e.target)}  type="text" className="form-control form-control-lg border-0"  placeholder="userName"/>

        </div>
        <div className='py-3 border-bottom border-1 '>
        <p className='ps-3 text-success labelform'>
        Email Address

        </p>
        <input onKeyUp={(e)=>validEmail(e.target)} type="email" className="form-control form-control-lg border-0"  placeholder="userEmail"/>
          <span className='LabelEmail px-3 py-1 rounded-3 text-bg-danger'>Not a valid email address</span>
        </div>
        <div className='py-3 border-bottom border-1 '>
        <p className=' ps-3 text-success labelform'>
        Phone Number

        </p>
        <input onKeyUp={(e)=>chlekInput(e.target)} type="number" className="form-control form-control-lg border-0"  placeholder="userNumber"/>
        </div>
        <div className='py-3 border-bottom border-1 '>
        <p className=' ps-3 text-success labelform'>
Massage
        </p>
        <textarea onKeyUp={(e)=>chlekInput(e.target)} type="text" rows={6} className="form-control form-control-lg border-0"  placeholder="Massage"></textarea>

        </div>
        <button className='btn btn-success py-3 px-4 mt-4'>Send</button>
       

    </div>
    
  </div>
  
  
  
  
  </>
}
