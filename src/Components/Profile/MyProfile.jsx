import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { ProfileDetails } from "../../AdminHttpServices/LoginHttpsService";
import {
  addMoreInfoAboutUser,
  addUserInfo,
} from "../../app/slice/userInfoSlice";

const MyProfile = () => {
  const [userDetailsData, setUserDetailsData] = useState();
  const profileData = useSelector((state) => state?.user?.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = async () => {
    try {
      const payload = {
        IdentityNo: profileData?.InsuranceNumber,
        PolicyNo: profileData?.PolicyNo,
        MemberNo: profileData?.Memberno,
      };
      let { data } = await ProfileDetails(payload);
      if (data && !data?.error) {
        setUserDetailsData(data?.profileDetails);
        await dispatch(addMoreInfoAboutUser(data?.profileDetails));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <>

        <div className="claims_management pt-4 pb-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
                <div className="row info_head align-items-center mb-md-3">
                  <div className="col d-flex align-items-center">
                    <Link>
                      <img src="/assets/img/arrow-left1.png" alt="i" />
                    </Link>
                    <h2>My Profile</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="row myprofile position-relative">
                      <Link
                        className="editbtn"
                        to="/edit-profile"
                        state={userDetailsData}
                      >
                        Edit
                      </Link>
                      <div className="col-auto position-relative myprofile_main text-center">
                        <div className="myprofile_img">
                          <img src="/assets/img/img1.png" alt="i" />
                        </div>
                        <h3>{userDetailsData?.Name}</h3>
                        <span>{`+933 ${
                          userDetailsData?.MobileNo || "NA"
                        }`}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <div className="row myprofile_details">
                      <div className="col-lg-2 col-md-3 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>National Id</span>
                          <strong>{userDetailsData?.NationalId}</strong>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Password</span>
                          <strong>{userDetailsData?.Password}</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Email Id</span>
                          <strong>{userDetailsData?.Email || "NA"}</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Address</span>
                          <strong>{userDetailsData?.Address || "NA"}</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>IBAN Number</span>
                          <strong>{userDetailsData?.IBANNumber || "NA"}</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Account Number</span>
                          <strong>
                            {userDetailsData?.AccountNumber || "NA"}
                          </strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Bank Name</span>
                          <strong>{userDetailsData?.BankName || "NA"}</strong>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 mb-md-5 mb-md-4 mb-4">
                        <div className="myprofile_text">
                          <span>Bank Address</span>
                          <strong>
                            {userDetailsData?.BankAddress || "NA"}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default MyProfile;
