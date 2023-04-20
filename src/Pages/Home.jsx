import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from "react";
import pic1 from './assets/img/Pic1.png'
import pic2 from './assets/img/Pic2.png'
import pic3 from './assets/img/Pic3.png'
import pic4 from './assets/img/Pic4.png'

function Home() {    
    const [index, setIndex] = useState(0);
        
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        useEffect(() => {
          const timer = setInterval(() => {
            setIndex((index + 1) % 4);
          }, 3000);
          return () => clearInterval(timer);
        }, [index]);
      
        
  return (
    <>
   <Carousel activeIndex={index} onSelect={handleSelect} style={{maxWidth:'1000px', margin:'0 auto'}}>
   <Carousel.Item>
  <img
    className="d-block w-100"
    src={pic1}
    alt="First slide"
  />
</Carousel.Item>
   <Carousel.Item>
  <img
    className="d-block w-100"
    src={pic2}
    alt="First slide"
  />
</Carousel.Item>
   <Carousel.Item>
  <img
    className="d-block w-100"
    src={pic3}
    alt="First slide"
  />
</Carousel.Item>
   <Carousel.Item>
  <img
    className="d-block w-100"
    src={pic4}
    alt="First slide"
  />
</Carousel.Item>
</Carousel>
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
      <section class="our-vision-area ptb-100 pt-0" style={{marginTop:40}}>
            <div class="container">
                <div class="row">
                <div class="our-mission-content col-lg-12 col-md-12 col-sm-12 text-center">
                            <span class="sub-title">Our Mission &amp; Vision</span>
                            <h2>Better Information, Better Health</h2>
                          <p style={{fontSize:"20px"}}>"Empowering with knowledge for a healthier tomorrow"<br />
"Transforming healthcare with informed decisions"</p>
                        </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="single-vision-box">
                            <div class="icon">
                                <i class="flaticon-check-mark"></i>
                            </div>

                            <h3 style={{textAlign:'center',fontSize:'30px'}}>Our Mission</h3>
                        <p>Our goal at the medical clinic is to provide comprehensive and compassionate
healthcare to our patients. We are committed to delivering high-quality medical care in a
welcoming and respectful environment. Our team of healthcare professionals is
dedicated to promoting health and wellness and helping patients achieve optimal
physical and mental health. <br />
We strive to provide patient-centered care that is tailored to each individual's unique
needs and concerns. Whether you are seeking primary care, pain management, physical
therapy, neurology, podiatry, or urology services, we are here to help you achieve your
health goals and improve your quality of life. <br />
Our medical clinic is committed to staying up-to-date with the latest advancements in
medical technology and treatments to ensure that our patients receive the best possible
care. We believe that our patients deserve nothing less than excellence in healthcare,
and we are dedicated to delivering that every day.
</p>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="single-vision-box">
                            <div class="icon">
                                <i class="flaticon-check-mark"></i>
                            </div>

                            <h3 style={{textAlign:'center'}}>Our Planning</h3>
                         <p>At the medical clinic, we believe in careful planning to ensure that we can deliver
high-quality care to our patients. Our planning process includes: <br />
1. Patient Needs Assessment: <br />
2. Resource Allocation:<br />
3. Continuous Improvement:<br />
4. Training and Development:<br />
5. Technology and Innovation:<br />
Overall, our planning process is focused on delivering high-quality care that is
patient-centered, efficient, and effective.<br />
</p>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="single-vision-box">
                            <div class="icon">
                                <i class="flaticon-check-mark"></i>
                            </div>

                            <h3 style={{textAlign:'center'}}>Our Vision</h3>
                            <p>Our vision at the medical clinic is to be a leading healthcare provider in the community,
known for delivering high-quality, patient-centered care. We aspire to create an
environment where patients feel heard, respected, and cared for, and where healthcare
professionals are empowered to provide the best possible care.
</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="doctor-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Our Office Address</h2>
                <p>Our office is located at 1150 Webster Ave, Bronx NY 10456. If you need to schedule an
appointment or have any questions, please feel free to contact us at 347-271-7666. We
are open Monday through Friday from 9:00 am to 5:00 pm, and we look forward to
serving you.
</p>
                </div>
            </div>

            <div class="shape3"><img src="assets/img/shape/3.png" class="wow fadeInLeft animated" alt="" style={{visibility:"visible"}}/></div>
            <div className="text-center">

        <iframe width='100%' height='550' title='frame' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26396.760604940122!2d73.24352090160522!3d34.20782100010116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681414447746!5m2!1sen!2s"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </>
  )
}

export default Home
