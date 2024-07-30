import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

const CardDetails = () => {
  const data = useSelector((state) => state?.user?.cardDetails);

  return (
    <>
      {data &&
        data?.map((item, i) => (
          <>
            <div className="overflow-scroll">
              <div class="col-md-12 mb-md-5 mb-4">
                <div class="row information_comman">
                  <div class="col-md-9 mb-3">
                    <div class="infordetails">
                      <span>Class</span>
                      <strong>{item?.Class}</strong>
                    </div>
                  </div>
                  <div class="col-md-3 mb-md-3 mb-4 text-md-end text-center order_changed">
                    <div class="infor_logo">
                      <img src="/assets/img/whitelogo.png" alt="" />
                    </div>
                  </div>
                  <div class=" mb-lg-0 mb-md-4">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <div class="infordetails">
                          <span>Insurance number</span>
                          <strong>{item?.InsuranceNumber}</strong>
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <div class="infordetails">
                          <span>Date of Birth</span>
                          <strong>
                            {moment(item?.DateOfBirth).format("L")}
                          </strong>
                        </div>
                      </div>

                      <div class="col-md-6 mb-md-0 mb-3">
                        <div class="infordetails">
                          <span>Member Name</span>
                          <strong>{item?.MemberName}</strong>
                        </div>
                      </div>
                      <div class="col-md-3 mb-md-0 mb-3">
                        <div class="infordetails">
                          <span>Effective Date</span>
                          <strong>
                            {moment(item?.EffectiveDate).format("L")}
                          </strong>
                        </div>
                      </div>
                      <div class="col-md-3 mb-md-0 mb-3">
                        <div class="infordetails">
                          <span>Expiration Date</span>
                          <strong>
                            {moment(item?.ExpiryDate).format("L")}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-lg-6 d-flex align-items-end justify-content-end">
                  <a class="reload_btn" href="javascript:;">
                    <img src="/assets/img/reload.png" alt="" />
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default CardDetails;
