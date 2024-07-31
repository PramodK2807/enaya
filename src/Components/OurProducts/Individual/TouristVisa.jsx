import React from 'react'
import Layout from '../../Layout/Layout'

const TouristVisa = () => {
  return (
    <Layout>
    <>
      <section className="common_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <div className="common_img">
                <img src="/assets/img/Mozilla.png" alt />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="common_content">
                <h2>
                  Visa <span>Insurance</span>
                </h2>
                <p>
                  Ensure your health and safety while visiting Saudi Arabia
                  with our tailored insurance plans. Whether you are here on a
                  visit visa or as a tourist, Saudi Enaya provides extensive
                  coverage to meet all your medical needs, allowing you to
                  focus on enjoying your stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="similardesign comman_padding">
        <div className="container">
          <div className="row similar1 align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <div className="similar_img">
                <img src="/assets/img/semplan.png" alt />
              </div>
            </div>
            <div className="col-md-6 pe-md-5" data-aos="fade-left">
              <div className="similar_content">
                <h2>Visit Visa Insurance</h2>
                <p>
                  When planning a visit to Saudi Arabia, securing
                  comprehensive health insurance is essential. Our visit visa
                  insurance provides extensive health coverage tailored to
                  meet the needs of international visitors. Whether you are
                  here to visit family, attend business meetings, or explore
                  the country, our insurance plans ensure that you have access
                  to necessary medical services. Coverage includes emergency
                  medical treatment, hospitalization, outpatient services, and
                  more. With Saudi Enaya, you can focus on your visit,
                  confident that your health and well-being are protected by a
                  leading provider.
                </p>
                <div className="anchors_design">
                  <a
                    target="_blank"
                    href="http://visitvisa.saudienaya.com/VisitorOnline/#/ExtendInsurance"
                  >
                    To extend your visit visa insurance, please visit{" "}
                    <img src="/assets/img/arrow-right-line.png" alt />
                  </a>
                  <a
                    target="_blank"
                    href="http://visitvisa.saudienaya.com/VisitorOnline/#/Search"
                  >
                    To print your your extended visitor insurance, please
                    visit <img src="/assets/img/arrow-right-line.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row similar2 align-items-center">
            <div className="col-md-6 ps-md-5" data-aos="fade-right">
              <div className="similar_content">
                <h2>Tourist Visa Insurance</h2>
                <p>
                  Saudi Arabia offers a unique blend of rich cultural heritage
                  and modern attractions, making it a popular destination for
                  tourists worldwide. To ensure a worry-free travel
                  experience, our tourist visa insurance provides
                  comprehensive health coverage for international travelers.
                  Our plans cover a broad spectrum of medical services,
                  including emergency treatment, hospitalization, and routine
                  medical care, tailored specifically for tourists. By
                  choosing Saudi Enaya, you can explore the wonders of Saudi
                  Arabia with the assurance that you have reliable health
                  protection. We are committed to your safety and health,
                  allowing you to fully enjoy your travel experience.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="similar_img">
                <img src="/assets/img/corporateplan.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  </Layout>
  )
}

export default TouristVisa
