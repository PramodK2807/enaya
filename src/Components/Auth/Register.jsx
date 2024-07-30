import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Registration } from "../../AdminHttpServices/LoginHttpsService";

const Register = () => {
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(true);
  const [tnc, setTnc] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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
        document.getElementById("reset").click();
        navigate("/login");
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

  return (
    <Layout>
      {step === 1 && (
        <section
          className="auth_page"
          style={{ backgroundImage: "url(assets/img/cover2.png)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="auth_page_content">
                  <h1>Register For Account</h1>
                  <form
                    className="form_desig row"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group col-md-6">
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
                      {errors.identityNumber && (
                        <div className="invalid-feedback">
                          {errors.identityNumber.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
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
                      {errors.policyNumber && (
                        <div className="invalid-feedback">
                          {errors.policyNumber.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
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
                      {errors.fullName && (
                        <div className="invalid-feedback">
                          {errors.fullName.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
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
                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
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
                      {errors.phoneNumber && (
                        <div className="invalid-feedback">
                          {errors.phoneNumber.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
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
                      {errors.address && (
                        <div className="invalid-feedback">
                          {errors.address.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-12 position-relative">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {step === 2 && (
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
