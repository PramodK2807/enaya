import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "../Profile/ProfileModal";
import { ClaimList } from "../../AdminHttpServices/dashHttpServices";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackBtn from "../../utils/BackBtn";
import { addClaimList } from "../../app/slice/claimSlice";

const ClaimManagement = () => {
  const [claimsList, setClaimsList] = useState([]);
  const userData = useSelector((state) => state?.user?.userData);
  const claimData = useSelector((state) => state?.claim?.claimListData);
  console.log(claimData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (claimData?.length) {
      setClaimsList(claimData);
    } else {
      getClaims();
    }
  }, []);

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
              <div className="row claims_main align-items-center">
                <div className="col-md-6 mb-3">
                  <div className="result_found">
                    {claimsList?.length} results found
                  </div>
                </div>
                <div className="col-md-6 mb-3 text-end">
                  <a href="javascript:;" className="filter_btn">
                    Filter <img src="/assets/img/filter.png" alt="i" />
                  </a>
                </div>
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
      </div>
    </Layout>
  );
};

export default ClaimManagement;
