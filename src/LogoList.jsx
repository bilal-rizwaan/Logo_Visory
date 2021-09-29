import React from 'react';

const LogoList =(pros) =>{
    return(
     <React.Fragment>
    <section className=" whyysec logo-list">
<div className="container">
<div className="satisfication-list">
<ul>
    <li><span className="whyysecIcon icon-1"></span>{pros.title}</li>
    <li><span className="whyysecIcon icon-2"> </span>{pros.tit}</li>
    <li><span className="whyysecIcon icon-3"> </span>{pros.titling}</li>
    <li><span className="whyysecIcon icon-4"></span>{pros.titles}</li>
    <li><span className="whyysecIcon icon-5"></span>{pros.titled}</li>
</ul>
</div>
</div>
</section>
     </React.Fragment>
    )
}

export default LogoList;