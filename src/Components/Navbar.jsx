import { Link } from "react-router-dom"



const Navbar=()=>{
    
    return (
        <>
          <div class="preloader">
            <div class="loader">
                <div class="loader-outter"></div>
                <div class="loader-inner"></div>

                <div class="indicato=r"> 
                    <svg width="16px" height="12px">
                        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    
        <header class="header-area">
           

            <div class="navbar-area">
                <div class="fovia-nav">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <Link class="navbar-brand" to="/">
                                <img src="../../assets/img/logo.png" alt="logo"/>
                            </Link>
    
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item"><Link to="/" class="nav-link ">Home</Link></li>

                                    <li class="nav-item"><Link to="/insurances" class="nav-link">Insurances</Link>
                                    </li>

                                    <li class="nav-item"><Link to="/treatment" class="nav-link">Conditions We Treat</Link>
                                    </li>

                                    <li class="nav-item"><Link to="/physicians" class="nav-link">Our Physicians</Link>
                                    </li>
        
                                    <li class="nav-item"><Link to="/about" class="nav-link">About Us</Link></li>
                                </ul>
    
                                <div class="others-options">
                                   
    
                                    <Link to="/contact" class="btn btn-primary">Contact Us</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
           
        </header>
        </>
    )
}

export default Navbar