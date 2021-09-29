import React from 'react';
import Card from './Card';
import Data from './Data';



const Design=(props)=>{
  return(

   <React.Fragment>
    <section className="design-sec">
        <div className="container">
        <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
         <div className="design-text">
          <h3>Logo Design Solutions</h3>
          <p className="text-center">Making a great impression on the first glance is a sign of excellent customer communication Looking for logo designers to design logo online? Well, look no further. We’re a logo design company that focuses on the perfect first impression</p>
         </div>
         <div className="row">
         {
     Data.map((val,ind)=>{
       return<Card
        imgsrc={val.imgsrc}
       />
     })
     }
         </div>
        </div>

        </div>

        </div>
    </section>
   </React.Fragment>

  )
}


export default Design;