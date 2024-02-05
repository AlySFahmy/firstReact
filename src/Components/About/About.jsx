import React from 'react'

export default function About() {

  return <>
  
  <section className="  d-flex justify-content-center align-items-center text-white text-center py-5">
    <div>
    <h1 className='display-5 text-white fw-bolder'>ABOUT COMPONENT</h1>
    <h2 className='starAfter text-white position-relative py-3'> <i className='fa-solid fa-star fa-2xs'></i> </h2>
    <div className='container'>
        <div className="row justify-content-around">
            <div className="col-md-4  ">
                <div className="item">
                    <p className='fs-5 text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
</p>
                </div>

            </div>  
            <div className="col-md-4">
                <div className="item">
                    <p className='fs-5 text-start'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
</p>
                </div>

            </div>  
          </div>
    </div>
    </div>
  
    
  </section>
  
  
  </>
}
