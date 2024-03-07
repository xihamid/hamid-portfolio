function NavBar(){

        return <>


{/* <!-- Navigation --> */}
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
            
   
                <a className="navbar-brand logo-image" href="/">
                <img
                    src="../public/images/logo.svg"
                    style={{ width: '80px', height: '80px' }}
                    alt="alternative"
                />
                </a>


            {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
             {/* <a className="navbar-brand logo-text page-scroll" href="index.html">Mark</a> */}

            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link page-scroll" href="#services">Services</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <a className="dropdown-item page-scroll" href="project.html">Project Details</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                        </div>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link page-scroll" href="#contact">Contact</a>
                    </li> */}
                </ul>
                <span className="nav-item social-icons">
                    <span className="fa-stack">
                        <a  target="__blank" href="https://www.facebook.com/xihamid">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                        <a  target="__blank" href="https://twitter.com/xihamid">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                    <span className="fa-stack">
                <a  target="__blank" href="https://www.instagram.com/xihamid">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
            <a target="__blank" href="https://www.linkedin.com/in/xihamid">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-linkedin-in fa-stack-1x"></i>
            </a>
            </span>
                </span>
            </div> 
        </div> 
    </nav> 
   


    <header id="header" className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h1 className="h1-large"> Software Engineer, loves to create efficient web solutions</h1>
                        <a className="btn-solid-lg page-scroll" href="#about">Discover</a>
                        <a className="btn-outline-lg page-scroll" href="#contact"><i className="fas fa-user"></i>Contact Me</a>
                    </div> 
                </div>
            </div> 
        </div> 
    </header> 
  


        </>
}

export default NavBar;