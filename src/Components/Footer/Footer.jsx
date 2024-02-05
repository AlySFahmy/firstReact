
export default function Footer() {
  return <>
  <footer className=" text-white ">
  <div className="container  text-center ">
    <div className="row py-5 ">
        <div className="col-md-4">
            <div className="info  ">
                <h3>LOCATION</h3>
                <h5 className="  py-4 ">
                2215 John Daniel Drive<br/>
                Clark, MO 65243
                </h5>
            </div>

        </div>
        <div className="col-md-4">
            <div className="info ">
                <h3>AROUND THE WEB</h3>
                <div className="iconsFoteer py-4 d-flex justify-content-around align-items-center">
                    <div className="icons d-flex justify-content-around align-items-center">
                        <i className="fa-brands fa-xl fa-facebook-f"></i>
                    </div>
                    <div className="icons d-flex justify-content-around align-items-center">
                        <i className="fa-brands fa-xl fa-twitter"></i>
                    </div>
                    <div className="icons d-flex justify-content-around align-items-center">
                        <i className="fa-brands fa-xl fa-linkedin-in"></i>
                    </div>
                    <div className="icons d-flex justify-content-around align-items-center">
                        <i className="fa-brands fa-xl fa-dribbble"></i>
                    </div>

                </div>
            </div>

        </div>
        <div className="col-md-4">
            <div className="info ">
                <h2 className="text-white">ABOUT FREELANCER</h2>
                <h5>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</h5>
            </div>

        </div>
    </div>
  </div>
  <div className="copyR m-0 text-center py-3">
    <p className="m-0">Copyright © Your Website 2021</p>
  </div>
  </footer>
  
  
  
  </>
}
