import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SecureLS from "secure-ls";
import { NotificationList } from "../../AdminHttpServices/dashHttpServices";

const ls = new SecureLS();

const Topbar = () => {
  const userData = useSelector((state) => state?.user?.userData);
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState([]);
  let token = ls.get("enaya-token");

  useEffect(() => {
    if (token) {
      getNotification();
    }
  }, []);

  const getNotification = async () => {
    try {
      let { data } = await NotificationList({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });
      if (data && !data?.error) {
        setNotification(data?.NotificationList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="top_header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-lg-end justify-content-md-center justify-content-between align-items-center">
                <div className="col-auto pe-4">
                  <div className="dropdown languages_dropdown">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/assets/img/global-line.png" alt /> Eng
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <h2>Select Language</h2>
                      <form className="checkbox_form row" action="#">
                        <div className="form-group col-md-6 pe-2">
                          <input
                            className="d-none"
                            type="radio"
                            id="Language"
                            name="Language"
                          />
                          <label className="row" htmlFor="Language">
                            <div className="col checkbox_text">
                              <h3>Arabic</h3>
                              <h4>عربي</h4>
                            </div>
                            <div className="col-auto">
                              <div className="lang_icon">
                                <img src="/assets/img/arabic.svg" alt />
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className="form-group col-md-6 ps-1">
                          <input
                            className="d-none"
                            defaultChecked
                            type="radio"
                            id="Language1"
                            name="Language"
                          />
                          <label className="row" htmlFor="Language1">
                            <div className="col checkbox_text">
                              <h3>English</h3>
                              <h4>Worldwide</h4>
                            </div>
                            <div className="col-auto">
                              <div className="lang_icon">
                                <img src="/assets/img/eng.svg" alt />
                              </div>
                            </div>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-auto d-md-block d-none">
                  <form className="search_form" action="#">
                    <div className="form-group position-relative">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search here..."
                      />
                      <img
                        className="srch_ico"
                        src="/assets/img/srch.png"
                        alt="search"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-auto d-flex align-items-center">
                  {token && (
                    <Link to={"/profile"}>
                      <img src="/assets/img/account.png" alt="" />
                    </Link>
                  )}
                  {!token && (
                    <Link to={"/login"}>
                      <img src="/assets/img/account.png" alt="" />
                    </Link>
                  )}

                  <div className="">
                    <button
                      onClick={() => setShowModal(!showModal)}
                      style={{ border: "none", background: "none" }}
                    >
                      <img
                        height={20}
                        width={20}
                        style={{
                          border: "2px solid #cae4d7",
                          borderRadius: "50%",
                          padding: "3px",
                        }}
                        src="/assets/img/bell.png"
                        alt=""
                      />
                    </button>

                    <div
                      className={`notification_modal overflow-auto ${
                        showModal ? "show" : ""
                      }`}
                    >
                      <div className="d-flex rounded align-items-center justify-content-between bg-light px-3 py-2">
                        <h4>Notifications</h4>
                        <div
                          onClick={() => setShowModal(false)}
                          className="cursor_pointer"
                        >
                          <img
                            className="cut"
                            src="/assets/img/cut.png"
                            alt="Remove"
                          />
                        </div>
                      </div>

                      {notification && notification?.length > 0 ? (
                        notification?.map((item, i) => (
                          <>
                            <div className="row align-items-center bg-light my-2 px-0 mx-0">
                              <div className="col-2">
                                <img
                                  src="/assets/img/favicon.png"
                                  className="w-100 h-100"
                                  alt=""
                                />
                              </div>
                              <div className="col-10">
                               {item?.Notification}
                              </div>
                            </div>
                          </>
                        ))
                      ) : (
                        <p className="text-center">No notifications found</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* <div className="col-auto">
                  <a
                    className="myaccount_part"
                    data-bs-toggle="modal"
                    data-bs-target="#MyAccount"
                    href="javascript:;"
                  >
                    <img src="/assets/img/account.png" alt /> My Account
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade MyAccount_modal"
        id="MyAccount"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="row mx-0">
                <div className="col-lg-6 px-0">
                  <div className="myaccount_form">
                    <div className="myaccountform_head mb-4">
                      <h2>Login and manage your policy</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tristique arcu a nisi, semper. Ut cras odio ac sem ac.
                      </p>
                    </div>
                    <form className="row" action="#">
                      <div className="col-12 form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="National ID/Iqama ID"
                        />
                      </div>
                      <div className="col-12 form-group mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Policy Number"
                        />
                      </div>
                      <div className="col-12 form-group mb-0">
                        <a className="login_btnn" href="javascript:;">
                          Accept and Login
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 px-0">
                  <div className="myaccount_left">
                    <div>
                      <img
                        className="whitellogo"
                        src="/assets/img/whitelogo.png"
                        alt
                      />
                      <h2>Saudi Enaya App</h2>
                      <h3>Refine your approch insurance</h3>
                      <div className="downloadapp">
                        <a href="javascript:;">
                          <img src="/assets/img/appstrore.png" alt />
                        </a>
                        <a href="javascript:;">
                          <img src="/assets/img/google.png" alt />
                        </a>
                      </div>
                      <p>
                        Download our intuitive app to easily manage add control
                        your claims.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
