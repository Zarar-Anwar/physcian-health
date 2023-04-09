import { useMediaQuery, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import DrawerCom from "./Drawer"



const Navbar=()=>{
    const theme=useTheme()
    const isMatch=useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
         
        {isMatch ?(
            <>
                <div style={{display:"flex",marginTop:'5px'}}>
            <div style={{textAlign:'right'}}>
              <DrawerCom />
         </div>
         <div style={{marginLeft:'auto'}}>
              <Link  class="navbar-brand" to="/">
              <img   src="../../assets/img/logo.png" alt="logo"/>
          </Link>
                </div>
            </div>
          </>
        ):(
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
                                   
    
                                    <Link to="/contact" class="btn btn-success">Contact Us</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
           
        </header>
           )
        }
        </>
    )
}

export default Navbar