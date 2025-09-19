import React from "react";
import './components/home.css';
import shield from './components/images/shield.svg'
import replysvg from './components/images/replysvg.svg'
import star from './components/images/star.svg'

function Home() {
  return (
    <div className="container">
        <div className="row home-row">
            <div className="col-6 text-col d-flex flex-column mb-3">
                <div className="p-2">
                    <h1>
                        <strong>
                            Find Your Perfect
                            <span className="text-primary"> Rental Home </span>
                            in Nepal
                        </strong>
                    </h1>
                </div>
                <div className="p-2">
                    <p className="text-muted">
                        Discover thousands of verified rental properties 
                        across Kathmandu Valley and beyond. From cozy 
                        apartments to spacious family homes.
                    </p>
                </div>
                <div className="p-2 d-flex justify-content-evenly bd-highlight">
                    <div class="p-2 flex-fill">
                        <span>
                            <img 
                                src={shield} 
                                width="24" 
                                height="24" 
                                className="d-inline-block align-top mx-2" 
                                alt="GharBhada logo"
                            />
                        </span>
                        Verified Properties
                    </div>
                    <div className="p-2 flex-fill">
                        <span>
                            <img 
                                src={replysvg} 
                                width="24" 
                                height="24" 
                                className="d-inline-block align-top mx-2" 
                                alt="GharBhada logo"
                            />
                        </span>
                        Quick Response
                    </div>
                    <div class="p-2 flex-fill">
                        <span>
                            <img 
                                src={star} 
                                width="24" 
                                height="24" 
                                className="d-inline-block align-top mx-2" 
                                alt="GharBhada logo"
                            />
                        </span>
                        Trusted Platform
                    </div>
                </div>
            <div className="p-2">FIND/LIST Property</div>
            <div className="p-2">PROMOTE</div>
        </div>

        <div className="col-6 hero-pic">
            
        </div>
      </div>
    </div>
  );
}

export default Home;
