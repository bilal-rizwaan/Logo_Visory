import React from 'react';
import {NavLink} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import Img7 from '../src/images/illustrative.png';
import Img8 from '../src/images/mascot.png';
import Img9 from '../src/images/wordmark.png';
import Img10 from '../src/images/3d-logos.png';
import Img11 from '../src/images/abstract.png';
import Img12 from '../src/images/letter.png';
import Img13 from  '../src/images/pictorial.png';
const LogoType=()=>{
    return(
   <React.Fragment>
<section className="logoType-sec">
     <div className="container">
     <div className="row">
     <div className="col-lg-12 col-md-12 col-xs-12">
     <div className="logo-text">
    <h3 className="text-capitalize text-center">LOGO TYPES</h3>
     </div>
     <div className="tap-list">
     <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Illustrative Design</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Mascot</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Wordmark Design</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="design-tab" data-toggle="tab" href="#design" role="tab" aria-controls="contact" aria-selected="false">3D Design</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab-2" data-toggle="tab" href="#contact-2" role="tab" aria-controls="contact" aria-selected="false">Abstract Design</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab-3" data-toggle="tab" href="#contact-3" role="tab" aria-controls="contact" aria-selected="false">Letter Logo</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab-4" data-toggle="tab" href="#contact-4" role="tab" aria-controls="contact" aria-selected="false">Pictorial Mark</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row">
     <div className="col-lg-6 col-md-6 col-xs-12">
     <div className="illustrate-logo">
     <img src={Img7} className="img-fluid" alt=""/>
     </div>
     </div>
     <div className="col-lg-6 col-md-6 col-xs-12">
         <div className="illustrate-text">
           <h3>Illustrative Design</h3>
           <p>If you want to create a work of art – illustrative logos are the best fit as it contains intricate artwork. It will act as a trendy as well as contemporary image of your brand and keep the viewers attention longer than the traditional logo design. We at Logo Visory use latest tools and technology to create a remarkable illustrative logo for your brand.</p>
           <a href="#">Let's Get Started</a>
         </div>
     </div>
    </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className="row">
     <div className="col-lg-6 col-md-6 col-xs-12">
     <div className="illustrate-logo">
     <img src={Img8} className="img-fluid" alt=""/>
     </div>
     </div>
     <div className="col-lg-6 col-md-6 col-xs-12">
         <div className="illustrate-text">
           <h3>Mascot Logo Design</h3>
           <p>Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson. A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business.</p>
           <a href="#">Let's Get Started</a>
         </div>
     </div>
    </div>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <div className="row">
     <div className="col-lg-6 col-md-6 col-xs-12">
     <div className="illustrate-logo">
     <img src={Img9} className="img-fluid" alt=""/>
     </div>
     </div>
     <div className="col-lg-6 col-md-6 col-xs-12">
         <div className="illustrate-text">
           <h3>Wordmark Design</h3>
           <p>Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson. A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business.</p>
           <a href="#">Let's Get Started</a>
         </div>
     </div>
    </div>
  </div>
  <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
  <div className="row">
     <div className="col-lg-6 col-md-6 col-xs-12">
     <div className="illustrate-logo">
     <img src={Img10} className="img-fluid" alt=""/>
     </div>
     </div>
     <div className="col-lg-6 col-md-6 col-xs-12">
         <div className="illustrate-text">
           <h3>3D Design</h3>
           <p>If you’re looking for a modern style logo – our 3-Dimensional logo designs will serve you best. We specialize in making 3D logos which reflects your brand in an attractive way. With our abundant 3D logo designs – enjoy the rewards of attracting a large number of clients as your audience will be able to experience look and feel of your business. Ping us now and let’s add some dimensions to your boring logo designs.</p>
           <a href="#">Let's Get Started</a>
         </div>
     </div>
    </div>
  </div>
  <div class="tab-pane fade" id="contact-2" role="tabpanel" aria-labelledby="contact-2-tab">
  <div className="row">
     <div className="col-lg-6 col-md-6 col-xs-12">
     <div className="illustrate-logo">
     <img src={Img11} className="img-fluid" alt=""/>
     </div>
     </div>
     <div className="col-lg-6 col-md-6 col-xs-12">
         <div className="illustrate-text">
           <h3>Abstract Design</h3>
           <p>Abstract logo designs also known as smart logos is a mix of pictures, typography and shapes. A lot of organizations today use abstract logos for their businesses. They are usually used as a conceptual strategy to represent your business idea. It also allows you to exhibit different functions of your company. Join hands with Logo Visory to create your abstract logo that reflects an unclear vision of your business – so that you can play safe in your business operations.</p>
           <a href="#">Let's Get Started</a>
         </div>
     </div>
    </div>
  </div>
  <div class="tab-pane fade" id="contact-3" role="tabpanel" aria-labelledby="contact-3-tab">
  <div className="row">
     <div className="col-lg-6 col-md-6 col-xs-12">
     <div className="illustrate-logo">
     <img src={Img12} className="img-fluid" alt=""/>
     </div>
     </div>
     <div className="col-lg-6 col-md-6 col-xs-12">
         <div className="illustrate-text">
           <h3>Letter Logo Design</h3>
           <p>Letter Marks are solely typographic. They use a symbol representing the company through the use of its initials or the brands first letter. Many corporations choose to use this kind of logo as their initials can be graphically illustrated in a better manner.</p>
           <a href="#">Let's Get Started</a>
         </div>
     </div>
    </div>
  </div>
  <div class="tab-pane fade" id="contact-4" role="tabpanel" aria-labelledby="contact-4-tab">
  <div className="row">
     <div className="col-lg-6 col-md-6 col-xs-12">
     <div className="illustrate-logo">
     <img src={Img13} className="img-fluid" alt=""/>
     </div>
     </div>
     <div className="col-lg-6 col-md-6 col-xs-12">
         <div className="illustrate-text">
           <h3>Pictorial Mark</h3>
           <p>A pictorial mark (sometimes called a brand marks or logo symbol) is an icon, or graphic-based design. A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.</p>
           <a href="#">Let's Get Started</a>
         </div>
     </div>
    </div>
  </div>
</div>
     </div>
     </div>
     </div>
     </div>
    </section>
   </React.Fragment>
    )
}
export default LogoType;