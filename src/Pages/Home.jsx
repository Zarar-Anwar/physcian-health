import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <section class="page-title-area page-title-bg4">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2 style={{color:'#19ec67'}}>Experience healing beyond <br /> boundaries at our <br /> medical clinic</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="services-area ptb-100 specialities bg-f4f9fd">
            <div class="container">
            <div class="section-title">
                    <span>Main Specialities</span>
                    <h2>Our Main Specialities</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-1">
                            <div class="icon">
                                <i class="flaticon-cancer"></i>
                            </div>
                            <h3>Pain Management</h3>
                            <Link to="/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-2">
                            <div class="icon">
                                <i class="flaticon-liver"></i>
                            </div>
                            <h3>Physical Therapy</h3>
                            <Link to="/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></Link>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-3">
                            <div class="icon">
                                <i class="flaticon-kidney"></i>
                            </div>
                            <h3>Neurology</h3>
                                                        <Link to="/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></Link>

                       </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-4">
                            <div class="icon">
                                <i class="flaticon-ekg"></i>
                            </div>
                            <h3>Podiatry</h3>
                            <Link to="/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></Link>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-5">
                            <div class="icon">
                                <i class="flaticon-brain"></i>
                            </div>
                            <h3>Psychatric</h3>
                            <Link to="/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></Link>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box bg-6">
                            <div class="icon">
                                <i class="flaticon-radiation"></i>
                            </div>
                            <h3>Urology</h3>
                            <Link to="/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="appointment-area ptb-100 jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" data-jarallax-original-styles="null" style={{ marginTop:35,backgroundImage: "none", backgroundAttachment: "scroll", backgroundSize: "auto" }}
>
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
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Name" id="name" name="name"/>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-envelope"></i>
                                    </div>
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" class="form-control" placeholder="Enter Email Address" id="email" name="email"/>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-support"></i>
                                    </div>
                                    <label htmlFor="select">Select Your Services</label>
                                    <select style={{display:'none'}} name="select">
                                        <option>Pain Management</option>
                                        <option>Physical Therapy</option>
                                        <option>Neurology</option>
                                        <option>Podiatry</option>
                                        <option>Psychatric</option>
                                        <option>Urology</option>
                                    </select>
                                    <div class="nice-select"><span class="current">Cardiology</span><ul class="list"><li data-value="Cardiology" class="option selected">Cardiology</li><li data-value="Urologic Oncology" class="option">Urologic Oncology</li><li data-value="Neurology" class="option">Neurology</li><li data-value="Medicine" class="option">Medicine</li><li data-value="Surgery" class="option">Surgery</li><li data-value="Urology" class="option">Urology</li><li data-value="Radiology" class="option">Radiology</li><li data-value="Neurosurgery" class="option">Neurosurgery</li><li data-value="Bariatric Surgery" class="option">Bariatric Surgery</li></ul></div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <label htmlFor="text">Your Phone</label>
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
        <div id="jarallax-container-0"style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-100'}}
><div style={{ 
    backgroundPosition: "50% 50%", 
    backgroundSize: "100%", 
    backgroundRepeat: "no-repeat", 
    backgroundImage: "url('/assets/img/appointment-bg.jpg')",  
    top: "0px", 
    left: "0px", 
    width: "1261.4px", 
    height: "635.3px", 
    overflow: "hidden", 
    pointerEvents: "none", 
    marginLeft: "-197.701px", 
    marginTop: "10.35px", 
    visibility: "visible", 
    transform: "translateY(-37.6078px) translateZ(0px)" 
}}></div></div></section>
    </>
  )
}

export default Home
