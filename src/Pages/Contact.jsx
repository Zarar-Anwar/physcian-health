import { Link } from "react-router-dom"

function Contact() {
    const handleEmail=async(email)=>{
        window.open(`mailto:${email}`)
    }
    const handlePhone=async(Phone)=>{
        window.location.href(`tel:${Phone}`)
    }
  return (
    <>
      <section class="page-title-area page-title-bg4">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Contact</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
           
       
        <section class="contact-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span>Send Message</span>
                    <h2>Drop us message for any query</h2>
                    <p>If you have an idea, we would love to hear about it.</p>
                </div>

                <div class="row">
                    <div class="col-lg-7 col-md-12">
                        <div class="contact-form">
                            <form id="contactForm" novalidate="true">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" required="" data-error="Please enter your name" placeholder="Name"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" required="" data-error="Please enter your email" placeholder="Email"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required="" data-error="Please enter your number" class="form-control" placeholder="Phone"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" class="form-control" required="" data-error="Please enter your subject" placeholder="Subject"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="6" required="" data-error="Write your message" placeholder="Your Message"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="btn btn-primary disabled"  style={{   pointerEvents: 'all',cursor: 'pointer'}
}>Send Message <i class="flaticon-right-chevron"></i></button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12">
                        <div class="contact-info">
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <span>Address</span>
                                    1150 Wwbster Ave, 2nd FI Bronx &amp;NY 10456
                                </li>

                                <li>
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    </div>
                                <span>Email</span>
                                 <button onClick={handleEmail}>Contact@topcaremedicalclinic.com</button>
                         <button onClick={handleEmail}>info@topcaremedicalclinic.com</button>   </li>

                                <li>
                                    <div class="icon">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <span>Phone</span>
                                    <button onClick={()=>{
                                        handlePhone('+13472715338')
                                    }}>+13472715338</button>
                                    <button onClick={()=>{
                                        handlePhone('+13472715338')
                                    }}>+13472715338</button>   
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-map"><img src="assets/img/bg-map.png" alt=""/></div>
        </section>
    </>
  )
}

export default Contact
