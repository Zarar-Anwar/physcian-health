import Medical from './assets/img/Insurance/Medical.png'
import fidelis from './assets/img/Insurance/fidelis.png'
import metroplus from './assets/img/Insurance/metroplus.png'
import wellcare from './assets/img/Insurance/wellcare.png'
import BCB from './assets/img/Insurance/BCBS.png'
import Villagecare from './assets/img/Insurance/VillageCareMax.png'
import elderplan from './assets/img/Insurance/elderplan.png'
import UHC from './assets/img/Insurance/UHC.png'
import molinahealthcare from './assets/img/Insurance/Molina_Healthcare.png'
import SWH from './assets/img/Insurance/SWH.png'
import AgeWell from './assets/img/Insurance/AgeWell.png'
import centerplanforliving from './assets/img/Insurance/CenterPlanforliving.png'
import magellan from './assets/img/Insurance/Magellan.png'
import hamaspikchoice from './assets/img/Insurance/hamaspikChoice.png'
import partnerhealthplan_PHP from './assets/img/Insurance/partnerhealthplan_PHP.png'
import Integra from './assets/img/Insurance/Integra partner.png'
import caretocare from './assets/img/Insurance/Care to Care.png'
import { Link } from "react-router-dom"

function Insurances() {
  return (
    <>
    <section class="page-title-area page-title-bg5">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Insurance</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Insurance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="partner-area ptb-100 bg-f4f9fd">
            <div class="container">
                <div class="section-title">
                    <h2>Insurance We Do &amp; Accept</h2>
                  <p>Insurance provides a valuable safety net for individuals and businesses, giving them the confidence and peace of mind to take risks and pursue their goals without fear of catastrophic financial loss.</p>
                </div>

                <div class="customers-partner-list text-center" >
                  <div class='row justify-content-center'>
                  
                  <div class=" partner-item">
                            <img src={UHC}   alt=""/>
                    </div>

                    <div class=" partner-item">
                            <img src={molinahealthcare} alt=""/>
                    </div>
                    <div class=" partner-item">
                            <img src={SWH} alt=""/>
                    </div>
                    <hr style={{borderColor:'green'}}/>
                    <div class="  partner-item">
                            <img src={centerplanforliving} alt=""/>
                    </div>
                    <div class="  partner-item">
                            <img src={hamaspikchoice} alt=""/>
                    </div>
                    <div class="  partner-item">
                            <img src={magellan} alt=""/>
                    </div>
                    <hr style={{borderColor:'green'}}/>

                    <div class="  partner-item">
                            <img src={AgeWell} alt=""/>
                    </div>
                    <div class="  partner-item">
                            <img src={partnerhealthplan_PHP} alt=""/>
                    </div>
                    <div class="  partner-item">
                            <img src={Integra} alt=""/>
                    </div>
                    <hr style={{borderColor:'green'}}/>

                    <div class="   partner-item">
                            <img src={caretocare} alt=""/>
                    </div>
                    <div class="  partner-item ">
                        
                            <img src={fidelis} alt=""/>                        
                        
                    </div>

                    <div class="   partner-item">
                            <img src={Medical} alt=""/>
                    </div>
                    <hr style={{borderColor:'green'}}/>

                    <div class="   partner-item ">
                        
                            <img src={metroplus} alt=""/>
                        
                    </div>

                    <div class="   partner-item">
                            <img src={wellcare} alt=""/>
                    </div>

                    <div class="   partner-item">
                            <img src={BCB} alt=""/>
                    </div>
                    <hr style={{borderColor:'green'}}/>

                    <div class="  partner-item">
                            <img src={Villagecare} alt=""/>
                    </div>

                    <div class="  partner-item ">
                            <img src={elderplan} alt=""/>
                    </div>
                    <hr style={{borderColor:'green'}}/>

                  
                  </div>
                </div>
            </div>
        </section>   
    </>
  )
}

export default Insurances
