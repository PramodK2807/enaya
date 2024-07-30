import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "./ProfileModal";
import BackBtn from "../../utils/BackBtn";
import { GetPolicyInfo } from "../../AdminHttpServices/dashHttpServices";
import { useSelector } from "react-redux";
import CardDetails from "./CardDetails";

const PolicyInfo = () => {
  const [data, setData] = useState();
  const userData = useSelector((state) => state?.user?.userData);

  useEffect(() => {
    getPolicyInfo();
  }, []);

  const getPolicyInfo = async () => {
    try {
      const { data } = await GetPolicyInfo({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });
      if (data && !data?.error) {
        setData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      {/* <ProfileModal /> */}
      <div className="policy_information pt-4 pb-md-5 pb-4">
        <div className="container pb-2">
          <div className="row">
            <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <div className="row info_head align-items-center mb-md-3">
                <div className="col d-flex align-items-center">
                  <BackBtn />
                  <h2>Our Online Services</h2>
                </div>
                {/* <div className="col-auto">
                  <a className="downloadpdf" href="javascript:;">
                    <img src="/assets/img/Import.png" alt />
                  </a>
                </div> */}
              </div>
            </div>
            <CardDetails />
            <div className="col-md-12">
              <div className="whats_covered">
                <h3>What’s Covered?</h3>
                <ul>
                  {data?.PolicyInformation &&
                    data.PolicyInformation?.map((item, index) => (
                      <>
                        <li key={index}>
                          <p>{item}</p>
                        </li>
                      </>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyInfo;
