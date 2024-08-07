import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SecureLS from "secure-ls";
import { NotificationList } from "../../AdminHttpServices/dashHttpServices";
import Swal from "sweetalert2";
import {
  adminLogin,
  ForgotPasswordApi,
  ProfileDetails,
  ResetPassword,
  VerifyOTPToRestPassword,
} from "../../AdminHttpServices/LoginHttpsService";
import {
  addCardDetails,
  addMoreInfoAboutUser,
  addUserInfo,
} from "../../app/slice/userInfoSlice";
import { useForm } from "react-hook-form";

const ls = new SecureLS();

const Topbar = () => {
  const userData = useSelector((state) => state?.user?.userData);
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();
  let token = ls.get("enaya-token");

  const [identityNumber, setIdentityNumber] = useState("");
  const [password, setPassword] = useState("");

  // const [identityNumber, setIdentityNumber] = useState("2346518455");
  // const [password, setPassword] = useState("12345");
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const userLogin = async (e) => {
    let ls = new SecureLS();
    e.preventDefault();
    try {
      const payload = {
        IdentityNo: identityNumber?.trim(),
        Password: password.trim(),
        deviceOS: "Web",
        fcmToken: "",
      };
      let { data } = await adminLogin(payload);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Login successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        document.getElementById("closeLoginModal").click();
        await dispatch(addUserInfo(data?.CardDetails[0]));
        await dispatch(addCardDetails(data?.CardDetails));
        await getProfileDetails();
        ls.set("enaya-token", data?.token);
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProfileDetails = async () => {
    try {
      const payload = {
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      };
      let { data } = await ProfileDetails(payload);
      if (data && !data?.error) {
        // setUserDetailsData(data?.profileDetails);
        await dispatch(addMoreInfoAboutUser(data?.profileDetails));
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleLogout = () => {
    ls.remove("enaya-token");
    navigate("/login");
  };

  return (
    <>
      <div className="top_header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-lg-end justify-content-md-center justify-content-between align-items-center">
                {/* <div className="col-auto pe-4">
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
                </div> */}
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
                    <div className="container">
                      <div className="text-end">
                        <div className="dropdown">
                          <button
                            className="btn d-flex align-items-center myaccount_part "
                            style={{ outline: "none" }}
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {/* <img src="/assets/img/account.png" alt="" />{" "} */}
                            <i class="fa-regular fa-circle-user fs-5 me-2"></i>
                            <span className="text-white text-nowrap">
                              My Account
                            </span>
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <Link className="dropdown-item" to="/profile">
                                Profile
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/contact-us/faq"
                              >
                                FAQs
                              </Link>
                            </li>

                            <li onClick={() => setShowModal(!showModal)}>
                              <button className="dropdown-item" to="/">
                                Notifications
                              </button>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/about-us">
                                About US
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/terms-and-conditions"
                              >
                                Terms &amp; Condition
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/privacy-policy"
                              >
                                Privacy Policy
                              </Link>
                            </li>
                            {/* <li>
                              <Link
                                className="dropdown-item"
                                to="/help-&-support"
                              >
                                Help &amp; Support
                              </Link>
                            </li> */}
                            <li>
                              <button
                                className="dropdown-item"
                                // to-bs-toggle="modal"
                                // data-bs-target="#logout_modal"
                                onClick={handleLogout}
                              >
                                Logout
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {!token && (
                    <div class="col-auto">
                      <a
                        class="myaccount_part"
                        data-bs-toggle="modal"
                        data-bs-target="#MyAccount"
                        href="javascript:;"
                      >
                        <img src="assets/img/account.png" alt="" /> My Account
                      </a>
                    </div>
                  )}

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
                            <div className="col-10">{item?.Notification}</div>
                          </div>
                        </>
                      ))
                    ) : (
                      <p className="text-center">No notifications found</p>
                    )}
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
                id="closeLoginModal"
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
                    <form className="form_desig row" action="#">
                      <div className="form-floating col-md-12">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="National ID"
                          onChange={(e) => setIdentityNumber(e.target.value)}
                          value={identityNumber}
                        />
                        <label htmlFor="floatingInput">
                          National ID/Iqama ID
                        </label>
                      </div>
                      <div className="form-floating col-md-12 position-relative">
                        <input
                          className="form-control"
                          type={visible ? "text" : "password"}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <label htmlFor="floatingInput">Password</label>
                        <div
                          onClick={() => setVisible(!visible)}
                          className="eyebtn cursor_pointer"
                        >
                          {visible && <img src="/assets/img/eye.png" alt="i" />}
                          {!visible && (
                            <img
                              height={16}
                              width={16}
                              src="/assets/img/hide.png"
                              alt="i"
                            />
                          )}
                        </div>
                      </div>
                      {/* <div className="form-group col-md-12 position-relative d-flex justify-content-between">
                        <div>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#forgotpassword"
                            className="forgotpassword mt-0"
                            alt="i"
                            type="button"
                            onClick={handleForgotPassword}
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <div className="form-group text-center">
                          <div className="">
                            Don't have an account?{" "}
                            <Link
                              to={"/register-user"}
                              className="blue_text fw-bold"
                            >
                              Sign Up
                            </Link>
                          </div>
                        </div>
                      </div> */}
                      <div className="form-group col-md-12">
                        <button
                          className="form_btns"
                          type="submit"
                          onClick={userLogin}
                        >
                          Accept & Log In
                        </button>
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
                        <Link
                          target="_blank"
                          to="https://apps.apple.com/us/app/saudi-enaya/id6503640454"
                        >
                          <img src="/assets/img/appstrore.png" alt="app" />
                        </Link>
                        <Link
                          target="_blank"
                          to="https://play.google.com/store/apps/details?id=com.saudi.enaya"
                        >
                          <img src="/assets/img/google.png" alt="google" />
                        </Link>
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
