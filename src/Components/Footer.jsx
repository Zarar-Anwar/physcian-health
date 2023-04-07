import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <section className="footer-area">
            <div className="container">
                <div className="subscribe-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="newsletter-content">
                                <h2>Join Our Newsletter</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <form className="newsletter-form" data-toggle="validator">
                                <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autoComplete="off"/>

                                <button type="submit">Send<i className="fas fa-paper-plane"></i></button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link to="/"><img src="../Pages/assets/img/white-logo.png" alt=""/></Link>
                                <p>Powerfully flexible html template for medical &amp; health related organizations, institutes, clinics and businesses.</p>
                            </div>

                            <ul className="social">

                                <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>LINKS</h3>

                            <ul className="departments-list">

                                <li><Link to="/insurances">Insurances</Link></li>
                                <li><Link to="/treatment">Conditions we Treat</Link></li>
                                <li><Link to="/physicians">Physicians</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-6">

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
                    <p>© Fovia is Proudly Owned by <Link to="https://envytheme.com/" target="_blank">EnvyTheme</Link></p>
                </div>
            </div>
        </section>

        <div class="go-top"><i class="fas fa-chevron-up"></i></div>
    </>
  )
}

export default Footer
