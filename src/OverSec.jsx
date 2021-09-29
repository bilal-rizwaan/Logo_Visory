import React from 'react';


const OverSec =(props) =>{

    return(
    <React.Fragment>
    <section className="over-sec">
     <div className="container">
         <div className="row">
             <div className="col-lg-3 col-md-3 col-xs-12">
              <div className="overname">
                  <p>{props.sname}</p>
              </div>
             </div>
             <div className="col-lg-9 col-md-9 col-xs-12">
            <div className="main-no-list">
              <img src={props.img} className="img-fluid" alt="img"/>
            </div>
             </div>
         </div>
     </div>
    </section>
        </React.Fragment>

    )
}


export default OverSec;