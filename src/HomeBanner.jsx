import React, { useState } from 'react';
import Img4 from '../src/images/rateimg.png';
import Img5 from '../src/images/trustpilot.png';
import '../node_modules/animate.css/animate.min.css';


const HomeBanner=(props) =>{

   const [data,setData] = useState({
     fullname:"",
     phone: "",
     email: "",
     msg: "",
   });

   const InputEvent =(event)=>{
     const {name, value} = event.target;
      setData((preVal) =>{
       return{
           ...preVal,
           [name] : value,
       }
   });
};

    const formSubmit= (e) =>{
      e.preventDefault();
      alert(
     'Fuck You'
      );
    };
    return(
        <React.Fragment>
         <section className="homebanner">
        <div className="container">
            <div className="row">
            <div className="col-lg-7 col-md-7 col-xs-12">
             <div className="banner-logo wow fadeInLeft" data-duration="2s">
                 <img src={props.images} className="img-fluid" alt="img"/>
             </div>
            </div>
            <div className="col-lg-5 col-md-5 col-xs-12">
                <div className="new-form">
                    <form onSubmit={formSubmit}>
                       <h3>Signup Now & Grab<span>50% Discount</span></h3>
                       <div className="row">
                           <div className="col-lg-12 col-md-12 col-xs-12 mb-1">
                               <div className="contact-list">
                                  <input
                                  type="text"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  name="fullname"
                                  value={data.fullname}
                                  onChange={InputEvent}
                                  placeholder="Full Name"
                                  />
                               </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-lg-12 col-md-12 col-xs-12 mb-1">
                               <div className="contact-list">
                                  <input
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  name="email"
                                  value={data.email}
                                  onChange={InputEvent}
                                  placeholder="Email"

                                  />
                               </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-lg-12 col-md-12 col-xs-12 mb-1">
                               <div className="contact-list">
                                  <input
                                  type="text"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  name="number"
                                  value={data.no}
                                  onChange={InputEvent}
                                  placeholder="Phone Number"
                                  />
                               </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-lg-12 col-md-12 col-xs-12 mb-1">
                               <div className="contact-list">
                                  <textarea
                                   className="form-control"
                                  id="exampleFormControlInput1"
                                  name="msg"
                                  value={data.msg}
                                  onChange={InputEvent}
                                  placeholder="Project Description"
                                  rows="4"
                                  >
                                  </textarea>
                               </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-lg-12 col-md-12 col-xs-12">
                               <div className="contact-list">
                                  <button>Send Query</button>
                               </div>
                           </div>
                       </div>
                    </form>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-xs-12">
                  <div className="bannerLogoList">
                     <ul>
                         <li><img src={Img4} className="img-fluid"  alt="img"/></li>
                         <li><img src={Img5} className="img-fluid" alt="img" /></li>
                     </ul>
                  </div>
                  <div className="confustionText">
                      <span>Any Confusion?</span>
                      <a href ="#"> Why not discuss your idea?</a>
                  </div>
                </div>
            </div>
        </div>
    </section>
        </React.Fragment>

    )
}



export default HomeBanner;