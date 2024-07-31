import React from "react";
import Layout from "../Layout/Layout";

const SmePlan = () => {
  return (
    <Layout>
      <>
        <section className="plan_banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <div className="plan_content">
                  <h1>
                    SME <span>Health Insurance</span> Plans
                  </h1>
                  <p>
                    At Saudi Enaya, we cater to the distinct needs of small and
                    medium-sized enterprises. Our insurance products are fully
                    customizable to meet the specific requirements of your
                    business and employees. We provide comprehensive and
                    affordable benefits designed to support the growth and
                    security of your SME. Discover the perfect insurance
                    solution tailored to fit your needs.
                  </p>
                  <a className="plan_btn" href="javscript:;">
                    Get Insured
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-end" data-aos="fade-left">
                <div className="plan_img">
                  <img src="/assets/img/sme_imgg.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="planmain">
          <div className="container">
            <div className="row planmain_conatiner">
              <div className="col-lg-3 mb-lg-0 mb-md-4 mb-4">
                <nav>
                  <div
                    className="planouter_tabs nav nav-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home1"
                      type="button"
                      role="tab"
                      aria-controls="nav-home1"
                      aria-selected="true"
                    >
                      Diamond
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile1"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile1"
                      aria-selected="false"
                    >
                      Gold
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact1"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact1"
                      aria-selected="false"
                    >
                      Silver
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact2"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact2"
                      aria-selected="false"
                    >
                      Bronze/Classic
                    </button>
                  </div>
                </nav>
              </div>
              <div className="col-lg-9">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home1"
                    role="tabpanel"
                    aria-labelledby="nav-home1-tab"
                  >
                    <div className="row planmain_data">
                      <div className="col-12">
                        <ul
                          className="planinner_tabs nav nav-tabs mb-4"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="inner1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner1"
                              type="button"
                              role="tab"
                              aria-controls="inner1"
                              aria-selected="true"
                            >
                              SMS-S
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="inner2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner2"
                              type="button"
                              role="tab"
                              aria-controls="inner2"
                              aria-selected="false"
                            >
                              SMS-M
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="inner3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner3"
                              type="button"
                              role="tab"
                              aria-controls="inner3"
                              aria-selected="false"
                            >
                              SMS-T
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="inner1"
                            role="tabpanel"
                            aria-labelledby="inner1-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            VIP
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits</td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>Option 3</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>
                                              Option 3 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>
                                              Option 3 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_VIP</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Suite</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage</td>
                                          <td
                                            colSpan={6}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 2</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 1</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 4,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 5,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 1,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 2,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 25,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="inner2"
                            role="tabpanel"
                            aria-labelledby="inner2-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            VIP
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits</td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>Option 3</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>
                                              Option 3 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>
                                              Option 3 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_VIP</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Suite</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage</td>
                                          <td
                                            colSpan={6}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 2</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 1</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 4,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 5,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 1,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 2,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 25,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="inner3"
                            role="tabpanel"
                            aria-labelledby="inner3-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            VIP
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits</td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>Option 3</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>
                                              Option 3 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#97d4fd",
                                            }}
                                          >
                                            <strong>
                                              Option 3 <br />
                                              (Nil)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_VIP</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Suite</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage</td>
                                          <td
                                            colSpan={6}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 2</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 1</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 4,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 5,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 1,000</strong>
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 2,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                          <td
                                            colSpan={3}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 25,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>Nil</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile1"
                    role="tabpanel"
                    aria-labelledby="nav-profile1-tab"
                  >
                    <div className="row planmain_data">
                      <div className="col-12">
                        <ul
                          className="planinner_tabs nav nav-tabs mb-4"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="inner4-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner4"
                              type="button"
                              role="tab"
                              aria-controls="inner4"
                              aria-selected="true"
                            >
                              SMS-S
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="inner5-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner5"
                              type="button"
                              role="tab"
                              aria-controls="inner5"
                              aria-selected="false"
                            >
                              SMS-M
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="inner6-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner6"
                              type="button"
                              role="tab"
                              aria-controls="inner6"
                              aria-selected="false"
                            >
                              SMS-T
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="inner4"
                            role="tabpanel"
                            aria-labelledby="inner4-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            A-Gold
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_A</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Private</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 2</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 3,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 3,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 1,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 1,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="inner5"
                            role="tabpanel"
                            aria-labelledby="inner5-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            A-Gold
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_A</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Private</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 2</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 3,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 3,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 1,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 1,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="inner6"
                            role="tabpanel"
                            aria-labelledby="inner6-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            A-Gold
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_A</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Private</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>World Wide 2</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 3,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 3,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 1,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 1,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 20,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact1"
                    role="tabpanel"
                    aria-labelledby="nav-contact1-tab"
                  >
                    <div className="row planmain_data">
                      <div className="col-12">
                        <ul
                          className="planinner_tabs nav nav-tabs mb-4"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="inner7-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner7"
                              type="button"
                              role="tab"
                              aria-controls="inner7"
                              aria-selected="true"
                            >
                              SMS-S
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="inner8-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner8"
                              type="button"
                              role="tab"
                              aria-controls="inner8"
                              aria-selected="false"
                            >
                              SMS-M
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="inner9-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner9"
                              type="button"
                              role="tab"
                              aria-controls="inner9"
                              aria-selected="false"
                            >
                              SMS-T
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="inner7"
                            role="tabpanel"
                            aria-labelledby="inner7-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            B-Silver
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_B</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Semi-Private</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              KSA &amp; Home Country
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,500</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,500</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 750</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 750</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="inner8"
                            role="tabpanel"
                            aria-labelledby="inner8-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            B-Silver
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_B</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Semi-Private</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              KSA &amp; Home Country
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,500</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,500</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 750</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 750</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="inner9"
                            role="tabpanel"
                            aria-labelledby="inner9-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            B-Silver
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>Option 1</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>
                                              Option 1 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>Option 2</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#c5e6fc",
                                            }}
                                          >
                                            <strong>
                                              Option 2 <br />
                                              (Enhanced)
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SE_B</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Semi-Private</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              KSA &amp; Home Country
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,500</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,500</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 750</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 750</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact2"
                    role="tabpanel"
                    aria-labelledby="nav-contact2-tab"
                  >
                    <div className="row planmain_data">
                      <div className="col-12">
                        <ul
                          className="planinner_tabs nav nav-tabs mb-4"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="inner10-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner10"
                              type="button"
                              role="tab"
                              aria-controls="inner10"
                              aria-selected="true"
                            >
                              SMS-S
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="inner11-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner11"
                              type="button"
                              role="tab"
                              aria-controls="inner11"
                              aria-selected="false"
                            >
                              SMS-M
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="inner12-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#inner12"
                              type="button"
                              role="tab"
                              aria-controls="inner12"
                              aria-selected="false"
                            >
                              SMS-T
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="inner10"
                            role="tabpanel"
                            aria-labelledby="inner10-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={2}
                                            style={{ textAlign: "center" }}
                                          >
                                            C-Bronze
                                          </th>
                                          <th
                                            colSpan={2}
                                            style={{ textAlign: "center" }}
                                          >
                                            C-Classic
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C+</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C LTD</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>CR</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C+</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C LTD</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_CR</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Shared</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>KSA</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="inner11"
                            role="tabpanel"
                            aria-labelledby="inner11-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={2}
                                            style={{ textAlign: "center" }}
                                          >
                                            C-Bronze
                                          </th>
                                          <th
                                            colSpan={2}
                                            style={{ textAlign: "center" }}
                                          >
                                            C-Classic
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C+</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C LTD</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>CR</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C+</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C LTD</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_CR</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Shared</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>KSA</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="inner12"
                            role="tabpanel"
                            aria-labelledby="inner12-tab"
                          >
                            <div className="plandetails_main">
                              <div className="row plandetails_content">
                                <div className="col-12 px-0">
                                  <div className="table-responsive mb-4">
                                    <table
                                      className="product-table"
                                      width="100%"
                                    >
                                      <thead>
                                        <tr>
                                          <td width="30%">
                                            <strong>Class</strong>
                                          </td>
                                          <th
                                            colSpan={2}
                                            style={{ textAlign: "center" }}
                                          >
                                            C-Bronze
                                          </th>
                                          <th
                                            colSpan={2}
                                            style={{ textAlign: "center" }}
                                          >
                                            C-Classic
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Table of Benefits </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C+</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>C LTD</strong>
                                          </td>
                                          <td
                                            style={{
                                              textAlign: "center",
                                              backgroundColor: "#edf8ff",
                                            }}
                                          >
                                            <strong>CR</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Network</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C+</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_C LTD</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SE_CR</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Room Type</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>Shared</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Max Annual Limit (SAR)</td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>SAR 500,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Geographical Coverage </td>
                                          <td
                                            colSpan={4}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>KSA</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Dental Limit (SAR) </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 2,000</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td> Optical Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 400</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Maternity Limit (SAR)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>SAR 15,000</strong>{" "}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Minimum Provider Network (MPN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              75
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            Outside Hospital Network (OHN)
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              300
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Outside Clinic Network (OCN)</td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                          <td style={{ textAlign: "center" }}>
                                            <strong>
                                              20% <br />
                                              Max
                                              <br />
                                              100
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Generic Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              20% copayment, maximum
                                              participation in payment: SAR 30
                                            </strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Branded Medication</td>
                                          <td
                                            colSpan={9}
                                            style={{ textAlign: "center" }}
                                          >
                                            <strong>
                                              50% without maximum participation
                                            </strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-5 mx-0">
                  <div className="col-12">
                    <div className="benefitss">
                      <h2>Maximum Dental Benefit: </h2>
                      <ul>
                        <li>
                          <p>
                            Essential and Preventive Dentistry: 60% of Limit
                            with no copayment{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            Root Canals &amp; Emergencies: 40% of Limit with 20%
                            copayment &amp; no max amount{" "}
                          </p>
                        </li>
                        <li>
                          <p>index.Maximum Dental Benefit Point 3</p>
                        </li>
                      </ul>
                      <a className="plan_btn" href="javascript:;">
                        Get Insured{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default SmePlan;
