import React from  'react';

const ProcessBox =(pro)=>{

return(
  <React.Fragment>
<div className="col-lg-3 col-md-3 col-xs-12">
<div className="process-box">
<img src={pro.imgsrc} className="img-fluid" alt=""/>
<h4>{pro.title}</h4>
</div>
</div>
</React.Fragment>
)
};


export default ProcessBox;