import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "./ProfileModal";
import { useLocation, useNavigate } from "react-router-dom";
import {
  UpdatePassword,
  UpdateProfileDetails,
} from "../../AdminHttpServices/LoginHttpsService";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import BackBtn from "../../utils/BackBtn";

const EditProfile = () => {
  const profileData = useSelector((state) => state?.user?.userData);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const navigate = useNavigate()

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({ mode: "onChange" });

  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    setValue("email", state.Email);
    setValue("IBANNumber", state.IBANNumber);
    setValue("MobileNo", state.MobileNo);
    setValue("IdentityNo", state.IdentityNo);
    setValue("PolicyNo", state.PolicyNo);
    setValue("MemberNo", state.MemberNo);
    setValue("bankName", state.BankName);
    setValue("accountHolderName", state.AccountHolderName);
  }, []);

  const onSubmit = async (info) => {
    try {
      const payload = {
        IdentityNo: state?.NationalId,
        PolicyNo: profileData?.PolicyNo,
        MemberNo: profileData?.Memberno,
        MobileNo: info?.MobileNo,
        Email: info?.email,
        Address: state?.Address,
        IBAN: info?.IBANNumber,
        AccountHolderName: info?.accountHolderName,
        BankName: info?.bankName,
        BankAddress: state?.BankAddress,
      };
      let { data } = await UpdateProfileDetails(payload);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Profile updated",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        navigate('/profile')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePass = async (info) => {
    console.log(info);
    try {
      let { data } = await UpdatePassword({
        IdentityNo: profileData?.InsuranceNumber,
        PolicyNo: profileData?.PolicyNo,
        MemberNo: profileData?.Memberno,
        OldPassword: info?.password,
        NewPassWord: info?.newPassword,
      });
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Password updated",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <>
        {/* <ProfileModal /> */}
        <div className="claims_management pt-4 pb-md-5 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
                <div className="row info_head align-items-center mb-md-3">
                  <div className="col d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <BackBtn />
                      <h2>Edit My Profile</h2>
                    </div>
                    <div>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#forgotpassword"
                        className="forgotpassword mt-0"
                        alt="i"
                        type="button"
                        // onClick={handleForgotPassword}
                      >
                        Change Password
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <form
                  className="row form_desig justify-content-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="col-md-12">
                    <div className="row  position-relative">
                      <div className="col-auto position-relative myprofile_main text-center">
                        {/* <div className="myprofile_img">
                          <img src="/assets/img/img1.png" alt="i" />
                          <div className="edit_camera">
                            <img src="/assets/img/ph_camera.png" alt="i" />
                          </div>
                        </div> */}
                        {/* <h3>{state?.Name}</h3> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h3 className="text-center">{state?.Name}</h3>
                    <div className="row mt-3">
                      <div className="form-floating col-lg-3 col-md-4">
                        <input
                          type="number"
                          placeholder="National ID/Iqama ID"
                          className="form-control"
                          value={state?.NationalId}
                          disabled
                        />
                        <label htmlFor="floatingInput">
                          National ID/Iqama ID
                        </label>
                      </div>
                      <div className="form-floating col-lg-3 col-md-4">
                        <input
                          type="number"
                          placeholder="Policy No"
                          className="form-control"
                          value={profileData?.PolicyNo}
                          disabled
                        />
                        <label htmlFor="floatingPolicyNo">Policy No</label>
                      </div>
                      <div className="form-floating col-lg-3 col-md-4">
                        <input
                          type="text"
                          placeholder="Member Name"
                          className="form-control"
                          value={profileData?.MemberName}
                          disabled
                        />
                        <label htmlFor="floatingMemberName">Member Name</label>
                      </div>
                      <div className="form-floating col-lg-3 col-md-4">
                        <input
                          type="number"
                          placeholder="Mobile Number"
                          className={`form-control ${
                            errors.MobileNo ? "is-invalid" : ""
                          }`}
                          {...register("MobileNo", {
                            required: "Please enter your Mobile Number",
                            minLength: {
                              value: 9,
                              message: "Please enter 9 digits",
                            },
                            maxLength: {
                              value: 10,
                              message: "Maximum 10 digits",
                            },
                          })}
                        />
                        <label htmlFor="floatingMobileNo">Mobile Number</label>
                        {errors.MobileNo && (
                          <div className="invalid-feedback">
                            {errors.MobileNo.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-lg-3 col-md-4">
                        <input
                          type="email"
                          placeholder="Email ID"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          {...register("email", {
                            required: "Please enter a email",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        <label htmlFor="floatingEmail">Email ID</label>
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-lg-3 col-md-4">
                        <input
                          type="text"
                          placeholder="Account Holder Name"
                          className={`form-control ${
                            errors.accountHolderName ? "is-invalid" : ""
                          }`}
                          {...register("accountHolderName", {
                            required: "Account holder name",
                          })}
                        />
                        <label htmlFor="floatingAccountHolderName">
                          Account Holder Name
                        </label>
                        {errors.accountHolderName && (
                          <div className="invalid-feedback">
                            {errors.accountHolderName.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-lg-3 col-md-4">
                        <input
                          type="text"
                          placeholder="Bank Name"
                          className={`form-control ${
                            errors.bankName ? "is-invalid" : ""
                          }`}
                          {...register("bankName", {
                            required: "Please enter Bank name",
                          })}
                        />
                        <label htmlFor="floatingBankName">Bank Name</label>
                        {errors.bankName && (
                          <div className="invalid-feedback">
                            {errors.bankName.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-lg-3 col-md-4">
                        <input
                          type="text"
                          placeholder="IBAN Number"
                          className={`form-control ${
                            errors.IBANNumber ? "is-invalid" : ""
                          }`}
                          {...register("IBANNumber", {
                            required: "Please enter IBAN Number",
                            pattern: {
                              value: /^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,31}$/,
                              message: "Please enter a valid IBAN Number",
                            },
                          })}
                        />
                        <label htmlFor="floatingIBANNumber">IBAN Number</label>
                        {errors.IBANNumber && (
                          <div className="invalid-feedback">
                            {errors.IBANNumber.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-md-12 text-center mt-md-3">
                        <button type="submit" className="form_btns">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
                  <h2>Change your password</h2>
                  <p>Enter your Old password & New password to change</p>
                </div>
                <form
                  className="form_desig row"
                  onSubmit={handleSubmit2(handleChangePass)}
                >
                  <div className="form-floating col-md-12 position-relative">
                    <input
                      className={`form-control ${
                        errors2.password ? "is-invalid" : ""
                      }`}
                      type={visible ? "text" : "password"}
                      placeholder="Old Password"
                      {...register2("password", {
                        required: "* Please Enter Your Old Password",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "* Minimum 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
                        },
                      })}
                    />
                    <label htmlFor="floatingEmail">Old Password</label>

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
                    {errors2.password && (
                      <div className="invalid-feedback">
                        {errors2.password.message}
                      </div>
                    )}
                  </div>
                  <div className="form-floating col-md-12 position-relative">
                    <input
                      className={`form-control ${
                        errors2.newPassword ? "is-invalid" : ""
                      }`}
                      type={visible2 ? "text" : "password"}
                      placeholder="New Password"
                      {...register2("newPassword", {
                        required: "* Please Enter Your New Password",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "* Minimum 8 characters, One Uppercase, One Lowercase & One Special Character Allowed",
                        },
                      })}
                    />
                    <label htmlFor="floatingEmail">New Password</label>

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
                    {errors2.newPassword && (
                      <div className="invalid-feedback">
                        {errors2.newPassword.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group col-12 text-center mt-2">
                    <button type="submit" className="form_btns">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default EditProfile;
