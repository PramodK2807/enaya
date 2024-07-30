import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "./ProfileModal";
import { useSelector } from "react-redux";
import { PolicyBenefits } from "../../AdminHttpServices/dashHttpServices";
import moment from "moment";
import CardDetails from "./CardDetails";

const MyPolicyBenefits = () => {
  const [data, setData] = useState({});
  const userData = useSelector((state) => state?.user?.userData);

  useEffect(() => {
    getMyPolicyBenefits();
  }, []);

  const getMyPolicyBenefits = async () => {
    try {
      let { data } = await PolicyBenefits({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });
      if (data && !data?.error) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      {/* <ProfileModal /> */}
      <div className="policy_information pt-4 pb-md-5 pb-4">
        <div className="container pb-2">
          <div className="row">
            <div class="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <div class="row info_head align-items-center mb-md-3">
                <div class="col d-flex align-items-center">
                  <a href="javascript:;">
                    <img src="/assets/img/arrow-left1.png" alt="" />
                  </a>
                  <h2>My Policy Benefit</h2>
                </div>
                {/* <div class="col-auto">
                  <a class="downloadpdf" href="javascript:;">
                    <img src="/assets/img/Import.png" alt="" />
                  </a>
                </div> */}
              </div>
            </div>
            <CardDetails />
            <div className="col-md-12">
              <div className="whats_covered">
                <h3>My Benefits</h3>
                <div className="row">
                  {data?.BenefitDetails &&
                    data?.BenefitDetails?.map((item, i) => (
                      <>
                        <div className="col-lg-4 col-md-6 mb-lg-0 mb-md-3 mb-3">
                          <div className="Benefits_boxx">
                            <div className="Benefits_inner">
                              <div className="Benefits_text">
                                {item?.Limit} {item?.Provided}
                              </div>
                              <div className="Benefits_mark">
                                {item?.Flag === "Covered" ? (
                                  <img src="/assets/img/tickmark.png" alt="i" />
                                ) : (
                                  <img src="/assets/img/cross.png" alt="i" />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPolicyBenefits;
