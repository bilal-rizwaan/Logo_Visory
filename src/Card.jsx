import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactFancyBox from 'react-fancybox'
import '../node_modules/react-fancybox/lib/fancybox.css';
import '../node_modules/react-fancybox/lib/ReactFancyBox.js';


const Card=(props)=>{
return(
    <React.Fragment>
      <div className="col-md-3 col-sm-3 col-xs-12 mb-3 mt-3">
             <div className="design-list">
             <ReactFancyBox image={props.imgsrc} className=" img-fluid" alt="props"/>
             </div>
           </div>
    </React.Fragment>

)

};

export default Card;