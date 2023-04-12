import { Link } from 'react-router-dom'
import chronic from './assets/img/blog/chronic.png'
import acutepain from './assets/img/blog/acutepain.png'
import electromyography from './assets/img/blog/electromyography.png'
import epidural from './assets/img/blog/epidural-injection.png'
import jointpain from './assets/img/blog/joint-pain.png'
import lowbackpain from './assets/img/blog/lowbackPAin.png'
import nerveconduction from './assets/img/blog/nerveconduction.png'
import radiculopathy from './assets/img/blog/radiculopathy.png'

function Treatment() {
  return (
    <>
    <section class="page-title-area page-title-bg5">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Our Treatments</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>We Treat</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section style={{marginTop:'50px'}} class="blog-area ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="">
                              <img style={{height:'200px'}} src={chronic} alt=""/>
                            </div>
                            <div class="post-content">
                                <h3 style={{textAlign:'center',color:' /19ce67'}}>Chronic Pain</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="text-center">
                              <img style={{height:'200px'}} src={acutepain} alt=""/>
                            </div>
                            <div class="post-content">
                                <h3 style={{textAlign:'center',color:' /19ce67'}}>Acute Pain</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="text-center">
                              <img style={{height:'200px'}} src={lowbackpain} alt=""/>
                            </div>
                            <div class="post-content">
                                <h3 style={{textAlign:'center',color:' /19ce67'}}>Low Back Pain</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="text-center">
                              <img style={{height:'200px'}} src={jointpain} alt=""/>
                            </div>
                            <div class="post-content">
                                <h3 style={{textAlign:'center',color:' /19ce67'}}>Joint Pain</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="text-center">
                              <img style={{height:'200px'}} src={epidural} alt=""/>
                            </div>
                            <div class="post-content">
                                <h3 style={{textAlign:'center',color:' /19ce67'}}>Epidural Injection</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="text-center">
                              <img style={{height:'200px'}} src={radiculopathy} alt=""/>
                            </div>
                            <div class="post-content">
                                <h3 style={{textAlign:'center',color:' /19ce67'}}>Radiculopathy</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="text-center">
                              <img style={{height:'200px'}} src={electromyography} alt=""/>
                            </div>
                            <div class="post-content">
                                <h3 style={{textAlign:'center',color:' /19ce67'}}>Electromyography</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog-post">
                            <div class="text-center">
                              <img style={{height:'200px'}} src={nerveconduction} alt=""/>
                            </div>
                            <div class="post-content">
                                <h3 style={{textAlign:'center',color:' /19ce67'}}>Nerve Conduction Test</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blog-details-area ptb-100">
            <div class="container ">
                <div class="row ">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center" >
                        <div class="blog-details-desc">
                                <h1 style={{marginBottom:"30px"}}><strong>Condition Treat By Urology</strong></h1>
                                 <h6 style={{color:'#19ec67'}} ><strong>[ Urinary Tract Infections, Bladder Control Problems,<br /><br /> Prostate problems, Arthiritic Joints and tendinitis,<br /> <br /> Neuromas, Hammer toes and bunions ]</strong></h6>
                            <div class="article-content">
                                <p>Our urology specialists provide expert care for patients with urological conditions, including urinary tract
infections, kidney stones, prostate cancer, and bladder cancer. Our team of board-certified urologists uses
the latest diagnostic tools and treatments to help patients manage their conditions and improve their
quality of life. <br />
At our medical clinic, we are committed to providing high-quality medical care in a compassionate and
supportive environment. We invite you to explore our website to learn more about our services and to
schedule an appointment with one of our expert healthcare professionals.</p>
                            <div class="article-image">
                                <img src="assets/img/blog/3.jpg" alt=""/>
                            </div>
                                <blockquote class="wp-block-quote">
                                    <p>Urology is a medical specialty that focuses on the diagnosis and treatment of diseases and conditions affecting the urinary tract and male reproductive system.</p>
                                </blockquote>

                             </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Treatment


