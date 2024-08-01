import React, { useRef, useState } from "react";
import Layout from "../Layout/Layout";
import {
  adminLogin,
  ForgotPasswordApi,
  ResetPassword,
  SendOtp,
  VerifyOtp,
  VerifyOTPToRestPassword,
} from "../../AdminHttpServices/LoginHttpsService";
import { useDispatch } from "react-redux";
import { addCardDetails, addUserInfo } from "../../app/slice/userInfoSlice";
import SecureLS from "secure-ls";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [identityNumber, setIdentityNumber] = useState("2346518455");
  const [password, setPassword] = useState("12345");
  const [forgotPassApiData, setForgotPassApiData] = useState();
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputs = useRef([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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
        await dispatch(addUserInfo(data?.CardDetails[0]));
        await dispatch(addCardDetails(data?.CardDetails));
        navigate("/profile");
        ls.set("enaya-token", data?.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp.join("")); // Update OTP state

    if (value.length === 1) {
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    } else if (value.length > 1) {
      e.target.value = value.charAt(0);
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "") {
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleForgotPassword = async () => {
    try {
      let { data } = await ForgotPasswordApi({ IdentityNo: identityNumber });
      if (data && data?.StatusCode === "S") {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "OTP sent",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        setForgotPassApiData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyOTP = async () => {
    // document.getElementById("otpModalClose").click();
    // const resetPasswordModal = document.getElementById("resetpassword");
    // const resetPasswordBootstrapModal = new window.bootstrap.Modal(
    //   resetPasswordModal
    // );
    // resetPasswordBootstrapModal.show();
    try {
      let { data } = await VerifyOTPToRestPassword({
        IdentityNo: identityNumber,
        OTPId: forgotPassApiData?.OTPId,
        OTP: otp,
      });

      if (data && data?.StatusCode === "S") {
        document.getElementById("otpModalClose").click();
        const resetPasswordModal = document.getElementById("resetpassword");
        const resetPasswordBootstrapModal = new window.bootstrap.Modal(
          resetPasswordModal
        );
        resetPasswordBootstrapModal.show();
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "OTP Verified",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetPassword = async (info) => {
    try {
      let { data } = await ResetPassword({
        IdentityNo: identityNumber,
        password: info?.password,
        confirmPassword: info?.cpassword,
      });
      if (data ) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: data?.StatusDescription,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const validateConfirmPassword = (value) => {
    return value === watch("password") || "Your password does not match";
  };
  return (
    <Layout showFooter={false}>
      <section
        className="auth_page"
        style={{ backgroundImage: "url(assets/img/cover1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="auth_page_content">
                <h1>Welcome Back</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique arcu a nisi, semper. Ut cras odio ac sem ac.
                </p>
                <form className="form_desig row" action="#">
                  <div className="form-floating col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="National ID"
                      onChange={(e) => setIdentityNumber(e.target.value)}
                      value={identityNumber}
                    />
                    <label htmlFor="floatingInput">National ID/Iqama ID</label>
                  </div>
                  <div className="form-floating col-md-12 position-relative">
                    <input
                      className="form-control"
                      type={visible ? "password" : "text"}
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
                  <div className="form-group col-md-12 position-relative d-flex justify-content-between">
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
                  </div>
                  <div className="form-group col-md-12">
                    <button
                      className="form_btns"
                      type="submit"
                      onClick={userLogin}
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7 ps-5 d-lg-block d-md-none d-none">
              <div className="auto_logo">
                <img src="/assets/img/auth.png" alt="i" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade auth_modal"
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
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="otpModalClose"
                />
                <div className="authmodal_head">
                  <img src="/assets/img/mobilee.png" alt />
                  <h2>Check Your Mobile</h2>
                  {/* <p>
                    Enter 5 digit OTP we have sent to{" "}
                    <span>+933 790 568 6609</span> to verify
                  </p> */}
                </div>
                <form className="automodal_form row" action="#">
                  <div className="form-group otp_box mb-4 d-flex align-items-center justify-content-between col-12">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <input
                          key={index}
                          className="form-control shadow-none no-spinners"
                          type="number"
                          maxLength={1}
                          ref={(el) => (inputs.current[index] = el)}
                          onChange={(e) => handleInputChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      ))}
                  </div>

                  <div className="form-group col-12 text-center mt-2">
                    <button
                      type="button"
                      onClick={handleVerifyOTP}
                      className="form_btns"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade auth_modal"
          id="resetpassword"
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
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="authmodal_head">
                  <h2>Reset Password</h2>
                  <p>Make sure you not use your previous password</p>
                </div>
                <form
                  className="automodal_form form_desig row"
                  onSubmit={handleSubmit(handleResetPassword)}
                >
                  <div className="form-floating col-md-12 position-relative">
                    <input
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      type={visible ? "text" : "password"}
                      placeholder="Password"
                      {...register("password", {
                        required: "* Please Enter Your Password",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "* Minimum 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
                        },
                      })}
                    />
                    <label htmlFor="floatingInput">Password</label>
                    <div
                      onClick={() => setVisible(!visible)}
                      className="eyebtn cursor_pointer"
                    >
                      {visible ? (
                        <img src="/assets/img/eye.png" alt="i" />
                      ) : (
                        <img
                          height={16}
                          width={16}
                          src="/assets/img/hide.png"
                          alt="i"
                        />
                      )}
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="form-floating col-md-12 position-relative">
                    <input
                      className={`form-control ${
                        errors.cpassword ? "is-invalid" : ""
                      }`}
                      type={visible2 ? "text" : "password"}
                      placeholder="Confirm Password"
                      {...register("cpassword", {
                        required: "* Please Enter Your Confirm Password",
                        validate: validateConfirmPassword,
                      })}
                    />
                    <label htmlFor="floatingInput">New Password</label>
                    <div
                      onClick={() => setVisible2(!visible2)}
                      className="eyebtn cursor_pointer"
                    >
                      {visible2 ? (
                        <img src="/assets/img/eye.png" alt="i" />
                      ) : (
                        <img
                          height={16}
                          width={16}
                          src="/assets/img/hide.png"
                          alt="i"
                        />
                      )}
                    </div>
                    {errors.cpassword && (
                      <div className="invalid-feedback">
                        {errors.cpassword.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group col-12 text-center mt-2">
                    <button type="submit" className="form_btns">
                      Set New Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright_auth">
          © 2021. - 2025 All Rights Reserved. Saudi Enaya
        </div>
      </section>
    </Layout>
  );
};

export default Login;
