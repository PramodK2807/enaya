import React from "react";
import Layout from "./Layout/Layout";

const Desclaimer = () => {
  return (
    <Layout>
      <>
        <section className="common_banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <div className="common_img">
                  <img src="/assets/img/fraud.png" alt="i" />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="common_content">
                  <h2>
                    Disclaimer <span />
                  </h2>
                  <p>
                    The information contained in this Website is for general
                    information purposes only. The information is provided by
                    Saudi Enaya, and while we endeavor to keep the information
                    up to date and correct, we make no representations or
                    warranties of any kind, express or implied, about the
                    completeness, accuracy, reliability, suitability or
                    availability with respect to the Website or the information,
                    products, services, or related graphics contained on the
                    Website for any purpose. Any reliance you place on such
                    information is therefore strictly at your own risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contentpages">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="policy_pages">
                  <p>
                    In no event will we be liable for any loss or damage
                    including without limitation, any direct, incidental,
                    special, indirect or consequential loss or damages, or any
                    loss or damages whatsoever arising from loss of data or
                    profits arise out of, or in connection with, the use of this
                    Website. In particular, Saudi Enaya shall not be liable to
                    any Customer(s)/User(s) for any delay in providing or
                    restoring the Saudi Enaya Website nor for loss or damage(s)
                    and/or any loss of data howsoever caused including without
                    limitation, non-delivery, misuse or mis-delivery or of any
                    interruption, suspension, or termination of service, or for
                    the contents, accuracy or information or resource made
                    available or received or transmitted through the Saudi Enaya
                    Website.{" "}
                  </p>
                  <p>
                    Through this Website you are able to link to other websites
                    which are not under the control of Saudi Enaya. We have no
                    control over the nature, content and availability of those
                    sites. The inclusion of any links does not necessarily imply
                    a recommendation or endorse the views expressed within them.
                  </p>
                  <p>
                    Every effort is made to keep the Website up and running
                    smoothly. However, Saudi Enaya takes no responsibility for,
                    and will not be liable for, the Website being temporarily
                    unavailable due to technical issues beyond our control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Desclaimer;
