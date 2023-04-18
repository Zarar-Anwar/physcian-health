import { Modal,Box, Button, useMediaQuery, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import DrawerCom from "./Drawer"
import Appointment from "../Pages/Appointment"
import { useState } from "react"



const Navbar=()=>{
    const theme=useTheme()
    const isMatch=useMediaQuery(theme.breakpoints.down('md'))
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        window.location.reload()
      };
    return (
        <>
          <div class="top-header">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <ul class="header-contact-info">
                                <li><i class="far fa-clock"></i> Mon - Fri 09:00 - 19:00</li>
                                <li><i class="fas fa-phone"></i> Call Us: +13472715338</li>
                                <li><i class="far fa-paper-plane"></i> Contact@topcaremedicalclinic.com</li>
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <div class="header-right-content">
                                <ul class="top-header-social">
                                    <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/"><i class="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="/"><i class="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <Box sx={{textAlign:"center",marginTop:"20px"}}>
                <Button variant="contained" onClick={handleOpen} color="success">ADD APPOITNMENT</Button>
            </Box>
        <Modal open={open} onClose={handleClose}>
        {<Appointment  />}
      </Modal>  
            </div>
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
                                    <li class="nav-item"><Link to="/contact" class="nav-link">Contact Us</Link></li>
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