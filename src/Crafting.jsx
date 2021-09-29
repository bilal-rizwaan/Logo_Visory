import React from 'react';
import ListingData from './ListingData';
import Packages from './Packages';

const Crafting =() => {

    return(
     <React.Fragment>
     <section className="carfting-sec">
     <div className="container">
     <div className="row">
     <div className="col-lg-12 col-sm-12 col-sm-12">
        <div className="crafting-text">
           <h3>Crafting Perfect Logo Packages for Corporations Globally</h3>
           <p>At Logo Visory, our main agenda is to provide you with budget friendly solutions along with an exceptional brand identity guaranteed to set you apart from your competition.</p> <p>We stand tall against any other online logo design company with our conceptual logo designs. From business logo or corporate logo design to mascot or 3D logo design, we make sure you get nothing but the best logo design online. Make us your first choice for custom business logo design and corporate logo design. Reach us today and talk to our logo design architects regarding your project.</p>
        </div>
        <div className="row">
         {
          ListingData.map((val,ind)=>{
            return <Packages
            List={val.List}
            title={val.title}
            small={val.small}
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



export default Crafting;