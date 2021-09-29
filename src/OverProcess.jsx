import React from 'react';
import ProcessBox from './ProcessBox';
import ProcessData from './ProcessData';





const OverProcess=()=>{

return(
<React.Fragment>
<section className="overprocess">
<div className="container">
<div className="row">
<div className="col-lg-12 col-md-12 col-xs-12">
<div className="process-text">
<h4 className="text-center text-capitalize">OUR WORK PROCESS</h4>
</div>
<div className="row">
{
    ProcessData.map((val,ind)=>{
       return  <ProcessBox
         imgsrc={val.imgsrc}
         title={val.title}
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


};



export default OverProcess;