import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  Registration,
  RegistrationCheck,
  VerifyOtp,
} from "../../AdminHttpServices/LoginHttpsService";

const Register = () => {
  const currentYear = new Date().getFullYear();
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);
  const [identityNo, setIdentityNo] = useState("");
  const [idenNumber, setIdenNumber] = useState("");
  const [birth, setBirth] = useState("");
  const [OTPId, setOTPId] = useState("");
  const [visible, setVisible] = useState(false);
  const [tnc, setTnc] = useState(false);
  const [otp, setOtp] = useState("");
  const inputs = useRef([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleCheckUser = async () => {
    try {
      if (!idenNumber || birth?.length !== 4) {
        Swal.fire({
          toast: true,
          icon: "error",
          position: "top-end",
          title: "Please enter valid details",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        return false;
      }

      let { data } = await RegistrationCheck({
        IdentityNo: idenNumber?.trim(),
        YearOfBirth: birth?.trim(),
        deviceOS: "Web",
        fcmToken: "",
      });

      // setValue("identityNumber", idenNumber);
      // setSubStep(2);

      if (data && !data?.error) {
        setValue("identityNumber", idenNumber);
        setSubStep(2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (info) => {
    try {
      if (!tnc) {
        Swal.fire({
          toast: true,
          icon: "warning",
          position: "top-end",
          title: "Please select Terms and Conditions",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        return false;
      }
      const formData = {
        IdentityNo: info?.identityNumber.trim(),
        PolicyNo: info?.policyNumber.trim(),
        FullName: info?.fullName.trim(),
        PhoneNumber: info?.phoneNumber.trim(),
        EmailId: info?.email.trim(),
        Address: info?.address.trim(),
        Password: info?.password.trim(),
      };
      let { data } = await Registration(formData);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: data.StatusDescription,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        setIdentityNo(info?.identityNumber?.trim());
        setOTPId(data?.OTPId);
        setStep(2);
        document.getElementById("reset").click();
        // navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: "Error occurred",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp.join(""));

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

  const handleVerifyOTP = async () => {
    try {
      let { data } = await VerifyOtp({
        IdentityNo: identityNo,
        OTPId: OTPId,
        OTP: otp,
      });

      if (data && data?.StatusCode === "S") {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "OTP Verified",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        setStep(3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;

    // Ensure only numeric input
    if (isNaN(value)) return;

    // Trim to 4 digits
    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    // Check if the value exceeds the current year
    if (parseInt(value, 10) > currentYear) {
      value = currentYear.toString();
    }

    setBirth(value);
  };

  return (
    <Layout>
      {step === 1 && (
        <section
          className="auth_page"
          style={{ backgroundImage: "url(assets/img/cover2.png)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div class="col-lg-6" data-aos="fade-right">
                <div class="auth_page_content">
                  <h1>Register For Account</h1>
                  {subStep === 1 && (
                    <form className="form_desig row">
                      <div className="form-floating col-md-6">
                        <input
                          type="number"
                          placeholder="National ID/Iqama ID"
                          className="form-control"
                          value={idenNumber}
                          onChange={(e) => setIdenNumber(e.target.value)}
                        />
                        <label htmlFor="floatingInput">
                          National ID/Iqama ID
                        </label>
                      </div>
                      <div className="form-floating col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          min={1980}
                          max={currentYear}
                          value={birth}
                          onChange={handleChange}
                          placeholder="Birth Year"
                        />
                        <label htmlFor="floatingInput">Birth Year (YYYY)</label>
                      </div>

                      <div className="form-group col-md-12">
                        <button
                          type="button"
                          onClick={handleCheckUser}
                          className="form_btns"
                        >
                          Check
                        </button>
                        <button type="reset" id="reset" className="d-none">
                          reset
                        </button>
                      </div>
                    </form>
                  )}
                  {subStep === 2 && (
                    <form
                      className="form_desig row"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-floating col-md-6">
                        <input
                          type="number"
                          placeholder="National ID/Iqama ID"
                          className={`form-control ${
                            errors.identityNumber ? "is-invalid" : ""
                          }`}
                          {...register("identityNumber", {
                            required: "* Please enter a Identity Number",
                          })}
                        />
                        <label htmlFor="floatingInput">
                          National ID/Iqama ID
                        </label>

                        {errors.identityNumber && (
                          <div className="invalid-feedback">
                            {errors.identityNumber.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-md-6">
                        <input
                          type="text"
                          placeholder="Policy Number"
                          className={`form-control ${
                            errors.policyNumber ? "is-invalid" : ""
                          }`}
                          {...register("policyNumber", {
                            required: "* Please enter a Policy Number",
                          })}
                        />
                        <label htmlFor="floatingInput">Policy Number</label>

                        {errors.policyNumber && (
                          <div className="invalid-feedback">
                            {errors.policyNumber.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-md-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className={`form-control ${
                            errors.fullName ? "is-invalid" : ""
                          }`}
                          {...register("fullName", {
                            required: "* Please enter Full Name",
                          })}
                        />
                        <label htmlFor="floatingInput">Full Name</label>

                        {errors.fullName && (
                          <div className="invalid-feedback">
                            {errors.fullName.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-md-6">
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
                        <label htmlFor="floatingInput">Email ID</label>

                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-md-6">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className={`form-control ${
                            errors.phoneNumber ? "is-invalid" : ""
                          }`}
                          {...register("phoneNumber", {
                            required: "* Please enter a phone number",
                            maxLength: {
                              value: 10,
                              message: "Phone number should be 10 digits",
                            },
                            minLength: {
                              value: 9,
                              message: "Phone number should be 9 digits",
                            },
                          })}
                        />
                        <label htmlFor="floatingInput">Phone Number</label>

                        {errors.phoneNumber && (
                          <div className="invalid-feedback">
                            {errors.phoneNumber.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating col-md-6">
                        <input
                          type="text"
                          placeholder="Address"
                          className={`form-control ${
                            errors.address ? "is-invalid" : ""
                          }`}
                          {...register("address", {
                            required: "* Please enter a address",
                          })}
                        />
                        <label htmlFor="floatingInput">Address</label>

                        {errors.address && (
                          <div className="invalid-feedback">
                            {errors.address.message}
                          </div>
                        )}
                      </div>
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
                      <div class="form-group col-md-12">
                        <div class="checkbox_main">
                          <input
                            class="d-none"
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            checked={tnc}
                            onChange={() => setTnc(!tnc)}
                          />
                          <label for="checkbox">
                            I agree to terms & conditions
                          </label>
                        </div>
                        <div class="checkbox_main"></div>
                      </div>
                      <div className="form-group col-md-12">
                        <button type="submit" className="form_btns">
                          Register
                        </button>
                        <button type="reset" id="reset" className="d-none">
                          reset
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VERIFY OTP */}

      {step === 2 && (
        <div className="row px-4 py-5 align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="text-center">
              <h3>Please verify your OTP</h3>
              <p>OTP sent</p>
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
      )}

      {/* GREETS */}

      {step === 3 && (
        <section className="successfully_page">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="successfully_message">
                  <img src="/assets/img/success.svg" alt="i" />
                  <h1>Account created successfully!</h1>
                  <p>
                    Welcome aboard! Start your success journey with SimpleFlow!
                  </p>
                  <Link to="/login" className="form_btns">
                    Let’s Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_auth">
            © 2021. - 2025 All Rights Reserved. Saudi Enaya
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Register;
