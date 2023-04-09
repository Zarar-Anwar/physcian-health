import { Link } from "react-router-dom"

function Aboutus() {
  return (
    <>
    <section class="page-title-area page-title-bg1">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>About Us</h2>
                            <ul>
                                <li><Link to="index.html">Home</Link></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-area ptb-100">
            <div class="container-fluid p-0">
                <div class="row m-0">
                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="about-image">
                            <img src="assets/img/about-img1.jpg" alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 p-0">
                        <div class="about-content">
                            <span>About Us</span>
                            <h2>Short Story About our Medical Clinic</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                            <ul>
                                <li><i class="flaticon-check-mark"></i> Scientific Skills For getting a better result</li>
                                <li><i class="flaticon-check-mark"></i> Communication Skills to getting in touch</li>
                                <li><i class="flaticon-check-mark"></i> A Career Overview opportunity Available</li>
                                <li><i class="flaticon-check-mark"></i> A good Work Environment For work</li>
                                <li><i class="flaticon-check-mark"></i> Scientific Skills For getting a better result</li>
                                <li><i class="flaticon-check-mark"></i> Communication Skills to getting in touch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="our-vision-area ptb-100 pt-0" style={{marginTop:40}}>
            <div class="container">
                <div class="row">
                <div class="our-mission-content col-lg-12 col-md-12 col-sm-12 text-center">
                            <span class="sub-title">Our Mission &amp; Vision</span>
                            <h2>Better Information, Better Health</h2>
                          <p style={{fontSize:"20px"}}>"Empowering with knowledge for a healthier tomorrow"<br />
"Transforming healthcare with informed decisions"</p>
                        </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-vision-box">
                            <div class="icon">
                                <i class="flaticon-check-mark"></i>
                            </div>

                            <h3>Our Mission</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-vision-box">
                            <div class="icon">
                                <i class="flaticon-check-mark"></i>
                            </div>

                            <h3>Our Planning</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-vision-box">
                            <div class="icon">
                                <i class="flaticon-check-mark"></i>
                            </div>

                            <h3>Our Vision</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Aboutus
