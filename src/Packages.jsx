import React from 'react'

const Packages =(pr)=>{

return(
  <React.Fragment>
<div className="col-lg-4 col-md-4 col-sm-12 mb-4">
<div className="basic-box">
<div className="basic-img">
<img src={pr.List} className="img-fluid" alt="" />
</div>
<h3>{pr.title} <span>{pr.small}</span></h3>
<span className="price"><del>£39</del><small>.99</small>ONLY</span>
<span className="price-1">£19<small>.99</small></span>
<p>Suitable for potential super-startups and brand revamps for companies.</p>
<ul>
<li><i className="fa fa-check-circle-o"></i>2 Custom Logo Design Concepts</li>
<li><i className="fa fa-check-circle-o"></i>By 2 Designers</li>
<li><i className="fa fa-check-circle-o"></i>2 Revisions</li>
<li><i className="fa fa-check-circle-o"></i>48 to 72 hours TAT</li>
<li><i className="fa fa-check-circle-o"></i>100% Unique Design Guarantee</li>
<li><i className="fa fa-check-circle-o"></i>100% Satisfaction Guarantee</li>
<li><i className="fa fa-check-circle-o"></i>100% Money Back Guarantee *</li>
<li><i className="fa fa-check-circle-o"></i>100% Ownership Rights</li>
</ul>
<p>Add on:<span>£50</span> for 24 Hours Rush Delivery</p>
<a href="#" data-toggle="modal" data-target="#exampleModal">ORDER NOW</a>
</div>
</div>
<div className="main-ordernow-list">
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
<div className="info-list">
<h3>Your <strong>Information</strong></h3>
<p>If you are interested in speaking with Logo Visory about an upcoming project, there are a number of ways we can make that happen. Filling out the form would help us get the right person in touch with you, or you could give us a call.</p>
</div>
<form >
<div className="row">
<div className="col-lg-6 col-md-6 col-xs-12">
<div className="info-list">
<input type="text" placeholder="Full Name"/>
</div>
</div>
<div className="col-md-6 col-sm-6 col-xs-12">
<div className="info-list">
<input type="email" placeholder="Email"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 col-sm-6 col-xs-12">
<div className="info-list">
<input type="text" placeholder="Contact Number" />
</div>
</div>
<div className="col-md-6 col-sm-6 col-xs-12">
<div className="info-list">
<input type="text"  placeholder="Title of your design"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 col-sm-6 col-xs-12">
<div className="info-list">
                            <input type="text"  className="PackageName" placeholder="Start Logo Package" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="info-list">
                            <input type="text" className="PackagePrice" placeholder="£39.99" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="info-list">
                            <input type="text"  placeholder="Add Unique Design Features"/>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="info-list">
                            <input type="text"  placeholder="Design Caption"/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="info-list">
                            <textarea placeholder="Business Description"></textarea>
                            <label>Please tell us briefly about your business or the services you provide</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="info-list">
                            <textarea placeholder="Design Perception" Name="quote[Design_Perception]"></textarea>
                            <label>What kind of a design do you want to portray i.e. fun, corporate, funky etc.</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="info-list">
                            <button type="submit">submit Request</button>
                          </div>
                        </div>
                      </div>
                    </form>

</div>
</div>
</div>
</div>
</div>
</React.Fragment>

)
};


export default Packages;