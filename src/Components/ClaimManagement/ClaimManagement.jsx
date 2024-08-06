import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "../Profile/ProfileModal";
import {
  ClaimList,
  GetClaimDetails,
} from "../../AdminHttpServices/dashHttpServices";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackBtn from "../../utils/BackBtn";
import { addClaimList } from "../../app/slice/claimSlice";
import moment from "moment";
// import { Loader } from "rsuite";
import { Loader } from "rsuite";

const ClaimManagement = () => {
  const [claimsList, setClaimsList] = useState([]);
  const [claimDetails, setClaimDetails] = useState([]);
  const userData = useSelector((state) => state?.user?.userData);
  const claimData = useSelector((state) => state?.claim?.claimListData);
  console.log(claimData);
  const [claimDetailsLoading, setClaimDetailsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getClaims();
  }, []);

  // useEffect(() => {
  //   if (claimData?.length) {
  //     setClaimsList(claimData);
  //   } else {
  //     getClaims();
  //   }
  // }, []);

  const getClaims = async () => {
    try {
      let payload = {
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      };
      let { data } = await ClaimList(payload);
      console.log(data?.claimManagementList);
      if (data && !data?.error) {
        setClaimsList(data?.claimManagementList);
        await dispatch(addClaimList(data?.claimManagementList));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getClaimDetails = async (id) => {
    try {
      setClaimDetailsLoading(true);
      let payload = {
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
        ClaimNo: id,
      };
      let { data } = await GetClaimDetails(payload);
      if (data && !data?.error) {
        setClaimDetails(data?.ClaimDetails);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setClaimDetailsLoading(false);
    }
  };
  return (
    <Layout>
      {/* <ProfileModal /> */}
      <div className="claims_management pt-4 pb-md-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <div className="row info_head align-items-center mb-md-3">
                <div className="col d-flex align-items-center">
                  <BackBtn />
                  <h2>Claim Management</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row claims_main align-items-start justify-content-start">
                <div className="col-md-6 mb-3">
                  <div className="result_found">
                    {claimsList?.length} results found
                  </div>
                </div>
                {/* <div className="col-md-6 mb-3 text-end">
                  <a href="javascript:;" className="filter_btn">
                    Filter <img src="/assets/img/filter.png" alt="i" />
                  </a>
                </div> */}
                <div className="col-md-12">
                  <div className="row">
                    {claimsList && claimsList.length > 0 ? (
                      claimsList?.map((claim, i) => (
                        <>
                          <div className="col-md-6 mb-4">
                            <div className="row claims_box">
                              <div className="col-md-8">
                                <div className="claims_left">
                                  <div className="claims_txt1">
                                    {claim?.CLAIMREFERENCE}
                                  </div>
                                  <div className="claims_txt2">
                                    Claim from {claim?.MemberName}
                                  </div>
                                  <div className="claims_schedule">
                                    <span>{claim?.city || "NA"}</span>
                                    <span>
                                      {claim?.CLAIMINCURREDDATE?.split("T")[0]}
                                    </span>
                                    <span>
                                      {claim?.CLAIMINCURREDDATE?.split("T")[1]}
                                    </span>
                                  </div>
                                  <div className="actions_btns">
                                    <a
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#forgotpassword"
                                      className="forgotpassword mt-0"
                                      alt="i"
                                      onClick={() =>
                                        getClaimDetails(claim?.CLAIMREFERENCE)
                                      }
                                    >
                                      <img src="/assets/img/view.png" alt="i" />{" "}
                                      View
                                    </a>
                                  </div>

                                  {/* <div className="actions_btns">
                                    <Link to={"/"}>
                                      <img src="/assets/img/view.png" alt="i" />{" "}
                                      View
                                    </Link>
                                    <a href="javascript:;">
                                      <img
                                        src="/assets/img/download.png"
                                        alt="i"
                                      />{" "}
                                      Download
                                    </a>
                                  </div> */}
                                </div>
                              </div>
                              <div className="col-md-4 text-md-end mt-md-0 mt-3">
                                <div className="claims_status">
                                  {claim?.CLAIMSTATUS}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))
                    ) : (
                      <p className="text-center">No Claims Found</p>
                    )}

                    <div className="col-md-12 text-center">
                      <Link
                        className="comman_btn1"
                        to={"/Claim-Management/Add-New"}
                      >
                        Claim Plus
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade claim_modal"
          id="forgotpassword"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close float-end"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />

                {claimDetailsLoading && (
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    <Loader backdrop content="loading..." vertical />
                  </div>
                )}
                {!claimDetailsLoading && (
                  <div>
                    <div className="row justify-content-between claim_content">
                      <div className="col-6">
                        <p className="claim_details_title">Reference Number</p>
                        <p>{claimDetails?.ReferenceNo || "NA"}</p>
                      </div>
                      <div className="col-6">
                        <p className="claim_details_title">Treatment Type</p>
                        <p>{claimDetails?.treatmentType || "NA"}</p>
                      </div>

                      <div className="col-6">
                        <p className="claim_details_title">Member Number</p>
                        <p>{claimDetails?.memberNo || "NA"}</p>
                      </div>
                      <div className="col-6">
                        <p className="claim_details_title">Claim Status</p>
                        <p>{claimDetails?.claimstatus || "NA"}</p>
                      </div>

                      <div className="col-6">
                        <p className="claim_details_title">Claim Number</p>
                        <p>{claimDetails?.claimno || "NA"}</p>
                      </div>
                      <div className="col-6">
                        <p className="claim_details_title">Claim Type</p>
                        <p>{claimDetails?.claimType || "NA"}</p>
                      </div>

                      <div className="col-12">
                        <p className="claim_details_title">Hospital Name</p>
                        <p>{claimDetails?.hospitalName || "NA"}</p>
                      </div>
                      <div className="col-12">
                        <p className="claim_details_title">Basic Diagnosis</p>
                        <p>{claimDetails?.basicDiagnosis || "NA"}</p>
                      </div>

                      <div className="col-6">
                        <p className="claim_details_title">Treatment Type</p>
                        <p>{claimDetails?.treatmentType || "NA"}</p>
                      </div>
                      <div className="col-6">
                        <p className="claim_details_title">Treatment Date</p>
                        <p>{moment(claimDetails?.treatment || "NA").format("L")}</p>
                      </div>

                      <div className="col-6">
                        <p className="claim_details_title">Requested Amount</p>
                        <p>{claimDetails?.RequestedAmount || "NA"}</p>
                      </div>
                      <div className="col-6">
                        <p className="claim_details_title">Approved Amount</p>
                        <p>{claimDetails?.ApprovedAmount || "NA"}</p>
                      </div>

                      <div className="col-6">
                        <p className="claim_details_title">Bank Name</p>
                        <p>{claimDetails?.bankName || "NA"}</p>
                      </div>
                      <div className="col-6">
                        <p className="claim_details_title">IBAN Number</p>
                        <p>{claimDetails?.IBANNo || "NA"}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClaimManagement;
