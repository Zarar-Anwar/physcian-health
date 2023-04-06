import React from 'react'

function Home() {
  return (
    <>
    <body>
      
        <div class="preloader">
            <div class="loader">
                <div class="loader-outter"></div>
                <div class="loader-inner"></div>

                <div class="indicator"> 
                    <svg width="16px" height="12px">
                        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    
        <header class="header-area">
            <div class="top-header">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <ul class="header-contact-info">
                                <li><i class="far fa-clock"></i> Mon - Fri 09:00 - 19:00</li>
                                <li><i class="fas fa-phone"></i> Call Us: <a href="#">+07 554 332 322</a></li>
                                <li><i class="far fa-paper-plane"></i> <a href="#"><span class="__cf_email__" data-cfemail="10757d71797c7568717d607c755065627e717d753e737f7d">[email&#160;protected]</span></a></li>
                            </ul>
                        </div>

                        <div class="col-lg-4">
                            <div class="header-right-content">
                                <ul class="top-header-social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navbar-area">
                <div class="fovia-responsive-nav">
                    <div class="container">
                        <div class="fovia-responsive-menu">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/img/logo.png" alt="logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="fovia-nav">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/img/logo.png" alt="logo"/>
                            </a>
    
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>

                                    <li class="nav-item"><a href="#" class="nav-link">Insurances</a>
                                    </li>

                                    <li class="nav-item"><a href="#" class="nav-link">Conditions We Treat</a>
                                    </li>

                                    <li class="nav-item"><a href="#" class="nav-link">Our Physicians<i class="fas fa-plus"></i></a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a href="#" class="nav-link">All Physicians</a></li>

                                            <li class="nav-item"><a href="#" class="nav-link">Physicians Details</a></li>
                                        </ul>
                                    </li>
        
                                    <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
                                </ul>
    
                                <div class="others-options">
                                   
    
                                    <a href="contact.html" class="btn btn-primary">Contact Us</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
           
        </header>
      
        <div class="home-slides owl-carousel owl-theme">
            <div class="main-banner item-bg1">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="main-banner-content">
                                <span>Best Healing Service</span>
                                <h1>Fovia is the No. 1 Hospital</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Quis ipsumpsum dolor sit amet consectetur.</p>

                                <div class="btn-box">
                                    <a href="#" class="btn btn-primary">Make appointment <i class="fas fa-bell"></i></a>
                                    <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" class="btn btn-light popup-youtube">Play Now <i class="fas fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="circle-shape1"><img src="assets/img/circle-shape1.png" alt="image"/></div>
                <div class="circle-shape2"><img src="assets/img/circle-shape2.png" alt="image"/></div>
                <div class="shape1"><img src="assets/img/shape/1.png" alt="image"/></div>
            </div>

            <div class="main-banner item-bg2">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="main-banner-content">
                                <span>Women Care</span>
                                <h1>Exceptional Care for Women</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Quis ipsumpsum dolor sit amet consectetur.</p>

                                <div class="btn-box">
                                    <a href="#" class="btn btn-primary">Make appointment <i class="fas fa-bell"></i></a>
                                    <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" class="btn btn-light popup-youtube">Play Now <i class="fas fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="circle-shape1"><img src="assets/img/circle-shape1.png" alt="image"/></div>
                <div class="circle-shape2"><img src="assets/img/circle-shape2.png" alt="image"/></div>
                <div class="shape1"><img src="assets/img/shape/1.png" alt="image"/></div>
            </div>

            <div class="main-banner item-bg3">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="main-banner-content">
                                <span>Health Service</span>
                                <h1>Your Health is Our Top Priority</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Quis ipsumpsum dolor sit amet consectetur.</p>

                                <div class="btn-box">
                                    <a href="#" class="btn btn-primary">Make appointment <i class="fas fa-bell"></i></a>
                                    <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" class="btn btn-light popup-youtube">Play Now <i class="fas fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="circle-shape1"><img src="assets/img/circle-shape1.png" alt="image"/></div>
                <div class="circle-shape2"><img src="assets/img/circle-shape2.png" alt="image"/></div>
                <div class="shape1"><img src="assets/img/shape/1.png" alt="image"/></div>
            </div>
        </div>
      
        <section class="main-services-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span>Main Features</span>
                    <h2>Our Main Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="main-services-box">
                            <div class="icon">
                                <i class="flaticon-doctor"></i>
                            </div>
                            <h3><a href="#">Advanced Care</a></h3>
                            <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="main-services-box">
                            <div class="icon">
                                <i class="flaticon-dental-chair"></i>
                            </div>
                            <h3><a href="#">Internal Medicine</a></h3>
                            <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="main-services-box">
                            <div class="icon">
                                <i class="flaticon-care"></i>
                            </div>
                            <h3><a href="#">Otolaryngology</a></h3>
                            <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="main-services-box">
                            <div class="icon">
                                <i class="flaticon-brain"></i>
                            </div>
                            <h3><a href="#">Ophthalmology</a></h3>
                            <p>Lorem ipsum dolor sit amet consecte adipiscing elit sed do eiusincidunt.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape2"><img src="assets/img/shape/2.png" alt="image"/></div>
        </section>
      
        <section class="about-area">
            <div class="container-fluid p-0">
                <div class="row m-0">
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="about-image">
                            <img src="assets/img/about-img1.jpg" alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="about-content">
                            <span>About Us</span>
                            <h2>Short Story About Fovia Clinic Since 1999</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                            <ul>
                                <li><i class="flaticon-check-mark"></i> Scientific Skills For getting a better result</li>
                                <li><i class="flaticon-check-mark"></i> Communication Skills to getting in touch</li>
                                <li><i class="flaticon-check-mark"></i> A Career Overview opportunity Available</li>
                                <li><i class="flaticon-check-mark"></i> A good Work Environment For work</li>
                            </ul>

                            <a href="#" class="btn btn-primary">Learn More <i class="flaticon-right-chevron"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="our-mission-area ptb-100">
            <div class="container-fluid p-0">
                <div class="row m-0">
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="our-mission-content">
                            <span class="sub-title">Our Mission & Vision</span>
                            <h2>Better Information, Better Health</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="flaticon-doctor"></i>
                                    </div>
                                    <span>Professional Staff</span>

                                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="flaticon-newborn"></i>
                                    </div>
                                    <span>Newborn Care</span>

                                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="flaticon-laboratory"></i>
                                    </div>
                                    <span>Sufficient Lab Tests</span>

                                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="flaticon-extraction"></i>
                                    </div>
                                    <span>Tooth Extraction</span>

                                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="our-mission-image">
                            <img src="assets/img/mission-img1.jpg" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape3"><img src="assets/img/shape/3.png" class="wow fadeInLeft" alt="image"/></div>
        </section>


        <section class="services-area ptb-100 bg-f4f9fd">
            <div class="container">
                <div class="section-title">
                    <span>Our Services</span>
                    <h2>Our Healthcare Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-1">
                            <div class="icon">
                                <i class="flaticon-cancer"></i>
                            </div>
                            <h3><a href="#">Cancer Services</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-2">
                            <div class="icon">
                                <i class="flaticon-liver"></i>
                            </div>
                            <h3><a href="#">Liver Transplant</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-3">
                            <div class="icon">
                                <i class="flaticon-kidney"></i>
                            </div>
                            <h3><a href="#">Kidney Cancer</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-4">
                            <div class="icon">
                                <i class="flaticon-ekg"></i>
                            </div>
                            <h3><a href="#">Cardiac Arrhythmia</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-5">
                            <div class="icon">
                                <i class="flaticon-tooth"></i>
                            </div>
                            <h3><a href="#">Dental Services</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-6">
                            <div class="icon">
                                <i class="flaticon-radiation"></i>
                            </div>
                            <h3><a href="#">Radiation Oncology</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="more-services-btn">
                            <a href="#" class="btn btn-primary">More Services <i class="flaticon-right-chevron"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
        <section class="doctor-area ptb-100 bg-fefefe">
            <div class="container">
                <div class="section-title">
                    <span>Doctors</span>
                    <h2>Meet Our Qualified Doctors</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="doctor-slides owl-carousel owl-theme">
                    <div class="single-doctor-box">
                        <div class="doctor-image">
                            <img src="assets/img/doctor/1.jpg" alt="image"/>

                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                        </div>

                        <div class="doctor-content">
                            <h3><a href="#">Dr. Addison Smith</a></h3>
                            <span>Cardiologists</span>

                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="single-doctor-box">
                        <div class="doctor-image">
                            <img src="assets/img/doctor/5.jpg" alt="image"/>

                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                        </div>

                        <div class="doctor-content">
                            <h3><a href="#">Dr. Sarah Taylor</a></h3>
                            <span>Nephrologists</span>

                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="single-doctor-box">
                        <div class="doctor-image">
                            <img src="assets/img/doctor/2.jpg" alt="image"/>

                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                        </div>

                        <div class="doctor-content">
                            <h3><a href="#">Dr. Aiken Ward</a></h3>
                            <span>Dermatologists</span>

                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="single-doctor-box">
                        <div class="doctor-image">
                            <img src="assets/img/doctor/3.jpg" alt="image"/>

                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                        </div>

                        <div class="doctor-content">
                            <h3><a href="#">Babatunde Jon</a></h3>
                            <span>Endocrinologists</span>

                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="single-doctor-box">
                        <div class="doctor-image">
                            <img src="assets/img/doctor/4.jpg" alt="image"/>

                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                        </div>

                        <div class="doctor-content">
                            <h3><a href="#">Eachann Jhon</a></h3>
                            <span>Gastroenterologists</span>

                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="appointment-area ptb-100 jarallax" data-jarallax='{"speed": 0.3}'>
            <div class="container">
                <div class="appointment-content">
                    <span class="sub-title">Book Appointment</span>
                    <h2>We are here for you</h2>

                    <form>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-user"></i>
                                    </div>
                                    <label>Your Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Name" id="name" name="name"/>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-envelope"></i>
                                    </div>
                                    <label>Your Email</label>
                                    <input type="email" class="form-control" placeholder="Enter Email Address" id="email" name="email"/>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-support"></i>
                                    </div>
                                    <label>Select Your Services</label>

                                    <select>
                                        <option>Cardiology</option>
                                        <option>Urologic Oncology</option>
                                        <option>Neurology</option>
                                        <option>Medicine</option>
                                        <option>Surgery</option>
                                        <option>Urology</option>
                                        <option>Radiology</option>
                                        <option>Neurosurgery</option>
                                        <option>Bariatric Surgery</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <label>Your Phone</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Phone" id="text" name="text"/>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="submit-btn">
                                    <button class="btn btn-primary">Make Appointment <i class="flaticon-right-chevron"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    
        
       <br /><br /> <section class="faq-area ">
            <div class="container-fluid p-0 mt-10">
                <div class="row m-0">
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="faq-image">
                            <img src="assets/img/faq-img1.jpg" alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="faq-accordion">
                            <span class="sub-title">Frequently Asked Questions</span>
                            <h2>Get Every Single Answers There if you want</h2>

                            <ul class="accordion">
                                <li class="accordion-item">
                                    <a class="accordion-title active" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i>
                                        My physician is a faculty member—what does that mean?
                                    </a>

                                    <p class="accordion-content show">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                </li>
                                
                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i>
                                        What is an academic medical center?
                                    </a>

                                    <p class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                </li>
                                
                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i>
                                        What doctor will I see?
                                    </a>

                                    <p class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                </li>

                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i>
                                        What is a medical student?
                                    </a>

                                    <p class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                </li>
                                
                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="fas fa-plus"></i>
                                        How are residents supervised?
                                    </a>

                                    <p class="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="partner-area ptb-100 bg-f4f9fd">
            <div class="container">
                <div class="section-title">
                    <h2>Featured Customers & Partners</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div class="customers-partner-list">
                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/1.png" alt="image"/>
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/2.png" alt="image"/>
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/3.png" alt="image"/>
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/4.png" alt="image"/>
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/5.png" alt="image"/>
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/6.png" alt="image"/>
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/7.png" alt="image"/>
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/8.png" alt="image"/>
                        </a>
                    </div>

                    <div class="partner-item">
                        <a href="#">
                            <img src="assets/img/partner/9.png" alt="image"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="footer-area">
            <div class="container">
                <div class="subscribe-area">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="newsletter-content">
                                <h2>Join Our Newsletter</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <form class="newsletter-form" data-toggle="validator">
                                <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off"/>

                                <button type="submit">Subscribe <i class="fas fa-paper-plane"></i></button>
                                <div id="validator-newsletter" class="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <div class="logo">
                                <a href="#"><img src="assets/img/white-logo.png" alt="image"/></a>
                                <p>Powerfully flexible html template for medical & health related organizations, institutes, clinics and businesses.</p>
                            </div>

                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget pl-5">
                            <h3>Departments</h3>

                            <ul class="departments-list">
                                <li><a href="#">Surgery and Radiology</a></li>
                                <li><a href="#">Departments</a></li>
                                <li><a href="#">Family</a></li>
                                <li><a href="#">Our Doctors</a></li>
                                <li><a href="#">Woman's Health</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget pl-5">
                            <h3>Links</h3>

                            <ul class="links-list">
                                <li><a href="#">Optician</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Pediatrics</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Dermatology</a></li>
                                <li><a href="#">Doctors</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Opening Hours</h3>

                            <ul class="opening-hours">
                                <li>Mon - Tues <span>9.00AM - 17.00PM</span></li>
                                <li>Wednesday <span>9.00AM - 17.00PM</span></li>
                                <li>Thursday <span>9.00AM - 17.00PM</span></li>
                                <li>Friday <span>9.00AM - 17.00PM</span></li>
                                <li>Saturday <span>Closed</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="copyright-area">
                    <p>© Fovia is Proudly Owned by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                </div>
            </div>
        </section>

        <div class="go-top"><i class="fas fa-chevron-up"></i></div>
 </body>
</>
)
  }
export default Home 