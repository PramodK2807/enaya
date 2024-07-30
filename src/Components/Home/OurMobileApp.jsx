import React from "react";

const OurMobileApp = () => {
  return (
    <section className="OurMobile_App comman_padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12" data-aos="fade-up">
            <div className="comman_head text-center">
              <h2>Our Mobile App</h2>
              <p>
                Manage your insurance needs effortlessly from your smartphone.
                Our app offers quick access to essential services <br /> and
                information, making your insurance experience seamless.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-6">
                <div className="OurMobile_content">
                  <div className="OurMobile_box">
                    <h3>Easy Access to Policy Details: </h3>
                    <p>View your policy information anytime, anywhere.</p>
                  </div>
                  <div className="OurMobile_box">
                    <h3>Submit Claims Effortlessly: </h3>
                    <p>File and track your claims with just a few taps.</p>
                  </div>
                  <div className="OurMobile_box">
                    <h3>Find Providers Quickly: </h3>
                    <p>
                      Locate hospitals and clinics in our network with ease.
                    </p>
                  </div>
                  <div className="OurMobile_box">
                    <h3>Check Benefits and Coverage: </h3>
                    <p>Understand what’s included in your plan at a glance. </p>
                  </div>
                  <div className="OurMobile_box">
                    <h3>Real-Time Updates: </h3>
                    <p>
                      Receive notifications about your claims and policy
                      changes.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 order_top">
                <div className="OurMobile_video">
                  <video
                    className="video_mobile"
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src="assets/video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMobileApp;
