import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import {
  AddNewClaim,
  ClaimInfo,
} from "../../AdminHttpServices/dashHttpServices";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";
import BackBtn from "../../utils/BackBtn";
import { useNavigate } from "react-router-dom";

const NewClaim = () => {
  const [files, setFiles] = useState([]);
  const [tnc, setTnc] = useState(false);
  const [admissionDate, setAdmissionDate] = useState(null);
  const [countryList, setCountryList] = useState();
  const [patientList, setPatientList] = useState();
  const [memberList, setMemberList] = useState();

  const [patientType, setPatientType] = useState(null);

  const userData = useSelector((state) => state?.user?.userData);
  const moreInfo = useSelector((state) => state?.user?.moreInfoAboutUser);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    getClaimInfo();
  }, []);

  useEffect(() => {
    setValue("IBANNo", moreInfo?.IBANNumber);
    setValue("accountHolderName", moreInfo?.AccountHolderName);
    setValue("accountNumber", moreInfo?.AccountNumber);
    setValue("bankName", moreInfo?.BankName);
    setValue("address", moreInfo?.Address);
  }, []);

  console.log("err", errors);

  const getClaimInfo = async () => {
    try {
      let { data } = await ClaimInfo({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });
      if (data && !data?.error) {
        if (data?.countryList) {
          setCountryList(data?.countryList);
        }
        if (data?.PatientType) {
          setPatientList(data?.PatientType);
        }
        if (data?.EmployeeList) {
          setMemberList(data?.EmployeeList);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (info) => {
    console.log(info, files);
    try {
      if (!tnc || tnc === null || tnc === false) {
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
      const formData = new FormData();
      formData.append("Country", info?.country || "");
      formData.append("PatientType", info?.patient || "");
      formData.append("RelationMemberNo", info?.member || "");
      formData.append("serviceProviderName", info?.serviceProviderName || "");
      formData.append(
        "ClaimIncurredDate",
        moment(new Date()).format("YYYY-MM-DD")
      );

      if (info?.patient === "IPD") {
        formData.append(
          "ClaimDischargeDate",
          moment(info?.claimDischargeDate).format("YYYY-MM-DD")
        );
        formData.append(
          "ClaimAddmissionDate",
          moment(info?.claimAdmissionDate).format("YYYY-MM-DD")
        );
      }
      if (info?.patient === "OPD") {
        formData.append(
          "TreatmentDate",
          info?.treatmentDate
            ? moment(info?.treatmentDate).format("YYYY-MM-DD")
            : ""
        );
      }
      formData.append("ClaimedAmount", info?.amount || "");
      formData.append("BankName", info?.bankName || "");
      formData.append("AccountHolderName", info?.accountHolderName || "");
      formData.append("AccountNumber", info?.accountNumber || "");
      formData.append("IBANNumber", info?.IBANNo || "");
      formData.append("LoginId", userData?.Memberno || "");
      formData.append("PolicyNo", userData?.PolicyNo || "");
      formData.append("IdentityNo", userData?.InsuranceNumber || "");
      formData.append("Address", info?.address || "");

      if (files?.length > 0) {
        files.forEach((f) => formData.append("File", f));
      } else {
        formData.append("File", "");
      }

      let { data } = await AddNewClaim(formData);
      if (data && !data?.error) {
        setFiles([]);
        document.getElementById("reset").click();
        navigate("/claim-management");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const currentFiles = files;

    // Calculate the total size of new files
    let newFilesSize = newFiles.reduce((acc, file) => acc + file.size, 0);

    // Check if any single new file exceeds the 5MB limit
    // if (newFiles.some(file => file.size > 5 * 1024 * 1024)) {
    //   Swal.fire({
    //     toast: true,
    //     icon: "warning",
    //     position: "top-end",
    //     title: "Single file size exceeds 5MB limit",
    //     showConfirmButton: false,
    //     timerProgressBar: true,
    //     timer: 3000,
    //   });
    //   return;
    // }

    // Calculate the total size if new files are added to existing files
    let totalFileSize =
      currentFiles.reduce((acc, file) => acc + file.size, 0) + newFilesSize;

    // Check if the total size exceeds 10MB
    if (totalFileSize > 10 * 1024 * 1024) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "Total file size exceeds 10MB limit",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    }

    // Check if the total number of files exceeds 5
    if (currentFiles.length + newFiles.length > 5) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "Maximum 5 files allowed",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    }

    // Update the files state
    setFiles([...currentFiles, ...newFiles]);
  };
  // const handleFileChange = (e) => {
  //   const newFiles = Array.from(e.target.files);
  //   let totalFileSize = newFiles.reduce((acc, file) => acc + file.size, 0);

  //   if (
  //     files.length === 0 &&
  //     newFiles.length === 1 &&
  //     newFiles[0].size > 5 * 1024 * 1024
  //   ) {
  //     Swal.fire({
  //       toast: true,
  //       icon: "warning",
  //       position: "top-end",
  //       title: "Single file size exceeds 5MB limit",
  //       showConfirmButton: false,
  //       timerProgressBar: true,
  //       timer: 3000,
  //     });
  //     return;
  //   }

  //   const combinedFiles = [...files, ...newFiles];
  //   totalFileSize += files.reduce((acc, file) => acc + file.size, 0);

  //   if (combinedFiles.length > 1 && totalFileSize > 10 * 1024 * 1024) {
  //     Swal.fire({
  //       toast: true,
  //       icon: "warning",
  //       position: "top-end",
  //       title: "Total file size exceeds 10MB limit",
  //       showConfirmButton: false,
  //       timerProgressBar: true,
  //       timer: 3000,
  //     });
  //     return;
  //   }

  //   setFiles(combinedFiles);
  // };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };
  const handleAdmissionDateChange = (e) => {
    const selectedDate = e.target.value;
    setAdmissionDate(selectedDate);
  };
  const handleDischargeValidation = (e) => {
    if (!getValues("claimAdmissionDate")) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "Please select Admission Date first",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      e.preventDefault();
      return false;
    }
    return true;
  };

  return (
    <Layout>
      {/* <ProfileModal /> */}
      <div className="claims_management pt-4 pb-md-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <div className="row info_head align-items-center mb-md-3">
                <div className="col d-flex align-items-center">
                  <BackBtn />
                  <h2>New Claim</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row new_claim align-items-center">
                <div className="col-12 mb-4">
                  <div className="newclaim_p">
                    We'll need some basic information. Could you please provide
                    the following details
                  </div>
                </div>
                <div className="col-md-12">
                  <form
                    className="form_desig row"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-floating col-lg-4 col-md-6">
                      <select
                        // className="form-select"
                        className="form-select"
                        {...register("country", {
                          required: "Please select a country",
                        })}
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option value="">Select a country</option>
                        {countryList &&
                          countryList?.map((item) => (
                            <option
                              key={item?.CountryCode}
                              value={item?.CountryCode}
                              // selected={item?.CountryCode === 966}
                            >
                              {item?.CountryName}
                            </option>
                          ))}
                      </select>
                      {errors.country && (
                        <div className="invalid-feedback">
                          {errors.country.message}
                        </div>
                      )}
                    </div>

                    <div className="form-floating col-lg-4 col-md-6">
                      <input
                        type="text"
                        id="floatingInput"
                        placeholder="Service Provider Name"
                        className={`form-control ${
                          errors.serviceProviderName ? "is-invalid" : ""
                        }`}
                        {...register("serviceProviderName", {
                          required: "Please select service provider",
                          maxLength: {
                            value: 30,
                            message:
                              "Service Provider name should not exceed 30 characters",
                          },
                          minLength: {
                            value: 5,
                            message: "Minimum 5 characters",
                          },
                        })}
                      />
                      {errors.serviceProviderName && (
                        <div className="invalid-feedback">
                          {errors.serviceProviderName.message}
                        </div>
                      )}
                      <label htmlFor="floatingInput">
                        Service Provider Name
                      </label>
                    </div>
                    <div className="form-floating col-lg-4 col-md-6">
                      <select
                        className={`form-select ${
                          errors.patient ? "is-invalid" : ""
                        }`}
                        {...register("patient", {
                          required: "Please select Patient type",
                        })}
                        onChange={(e) => setPatientType(e.target.value)}
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option value="">Select Patient type</option>
                        {patientList &&
                          patientList?.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                      {errors.patient && (
                        <div className="invalid-feedback">
                          {errors.patient.message}
                        </div>
                      )}
                    </div>
                    <div className="form-floating col-lg-4 col-md-6">
                      <select
                        className={`form-select ${
                          errors.member ? "is-invalid" : ""
                        }`}
                        {...register("member", {
                          required: "Please select Member",
                        })}
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option value="">Select Member</option>
                        {memberList &&
                          memberList?.map((item) => (
                            <option key={item?.MemberNo} value={item?.MemberNo}>
                              {item?.Name}
                            </option>
                          ))}
                      </select>
                      {errors.member && (
                        <div className="invalid-feedback">
                          {errors.member.message}
                        </div>
                      )}
                    </div>
                    <div className="form-floating col-lg-4 col-md-6">
                      <input
                        type="number"
                        id="floatingInput"
                        placeholder="Amount Being Claimed"
                        className={`form-control ${
                          errors.amount ? "is-invalid" : ""
                        }`}
                        {...register("amount", {
                          required: "Please enter amount",
                          minLength: {
                            value: 4,
                            message: "Minimum 4 digits",
                          },
                        })}
                      />
                      {errors.amount && (
                        <div className="invalid-feedback">
                          {errors.amount.message}
                        </div>
                      )}
                      <label htmlFor="floatingInput">
                        Amount Being Claimed
                      </label>
                    </div>
                    {patientType === "OPD" && (
                      <div className="form-floating col-lg-4 col-md-6">
                        <input
                          type="date"
                          max={new Date().toISOString().split("T")[0]}
                          id="floatingInput"
                          {...register("treatmentDate", {
                            required:
                              patientType === "OPD"
                                ? "Treatment Date is required"
                                : false,
                          })}
                          className={`form-control ${
                            errors.treatmentDate ? "is-invalid" : ""
                          }`}
                        />
                        <label htmlFor="floatingInput">Treatment Date</label>
                        {errors.treatmentDate && (
                          <div className="invalid-feedback">
                            {errors.treatmentDate.message}
                          </div>
                        )}
                      </div>
                    )}
                    {patientType === "IPD" && (
                      <>
                        <div className="form-floating col-lg-4 col-md-6">
                          <input
                            type="date"
                            max={new Date().toISOString().split("T")[0]}
                            id="floatingInput"
                            // {...register("claimAdmissionDate", {
                            //   required: "Admission Date is required",
                            //   onChange: handleAdmissionDateChange,
                            // })}
                            {...register("claimAdmissionDate", {
                              required:
                                patientType === "IPD"
                                  ? "Admission Date is required"
                                  : false,
                              onChange: handleAdmissionDateChange,
                            })}
                            className={`form-control ${
                              errors.claimAdmissionDate ? "is-invalid" : ""
                            }`}
                          />
                          <label htmlFor="floatingInput">Admission Date</label>
                          {errors.claimAdmissionDate && (
                            <div className="invalid-feedback">
                              {errors.claimAdmissionDate.message}
                            </div>
                          )}
                        </div>
                        <div
                          onClick={handleDischargeValidation}
                          className="form-floating col-lg-4 col-md-6"
                        >
                          <input
                            type="date"
                            max={new Date().toISOString().split("T")[0]}
                            min={
                              admissionDate
                                ? new Date(
                                    new Date(admissionDate).setDate(
                                      new Date(admissionDate).getDate() + 1
                                    )
                                  )
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            id="floatingInput"
                            // {...register("claimDischargeDate", {
                            //   required: "Discharge Date is required",
                            // })}
                            {...register("claimDischargeDate", {
                              required:
                                patientType === "IPD"
                                  ? "Discharge Date is required"
                                  : false,
                            })}
                            className={`form-control ${
                              errors.claimDischargeDate ? "is-invalid" : ""
                            }`}
                          />
                          <label htmlFor="floatingInput">Discharge Date</label>
                          {errors.claimDischargeDate && (
                            <div className="invalid-feedback">
                              {errors.claimDischargeDate.message}
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    <div className="form-floating col-lg-4 col-md-6 position-relative edit_field">
                      <input
                        type="text"
                        id="floatingInput"
                        placeholder="IBAN Number"
                        {...register("IBANNo", {
                          required: "IBAN Number Date is required",
                        })}
                        className="form-control"
                        // className={`form-control ${
                        //   errors.IBANNo ? "is-invalid" : ""
                        // }`}
                        disabled
                      />
                      {errors.IBANNo && (
                        <div className="invalid-feedback">
                          {errors.IBANNo.message}
                        </div>
                      )}
                      <button type="button">
                        <img src="/assets/img/editt.png" alt="i" />
                      </button>
                      <label htmlFor="floatingInput">IBAN Number</label>
                    </div>

                    <div className="form-floating col-lg-4 col-md-6 position-relative edit_field">
                      <input
                        type="text"
                        id="floatingInput"
                        placeholder="Account Number"
                        {...register("accountNumber", {
                          required: "Account Number Date is required",
                        })}
                        // className={`form-control ${
                        //   errors.accountNumber ? "is-invalid" : ""
                        // }`}
                        className="form-control"
                        disabled
                      />
                      {errors.accountNumber && (
                        <div className="invalid-feedback">
                          {errors.accountNumber.message}
                        </div>
                      )}
                      <button type="button">
                        <img src="/assets/img/editt.png" alt="i" />
                      </button>
                      <label htmlFor="floatingInput">Account Number</label>
                    </div>

                    <div className="form-floating col-lg-4 col-md-6 position-relative edit_field">
                      <input
                        type="text"
                        id="floatingInput"
                        placeholder="Account Holder Name"
                        {...register("accountHolderName", {
                          required: "Account Holder Name is required",
                        })}
                        // className={`form-control ${
                        //   errors.accountHolderName ? "is-invalid" : ""
                        // }`}
                        className="form-control"
                        disabled
                      />
                      {errors.accountHolderName && (
                        <div className="invalid-feedback">
                          {errors.accountHolderName.message}
                        </div>
                      )}
                      <button type="button">
                        <img src="/assets/img/editt.png" alt="i" />
                      </button>
                      <label htmlFor="floatingInput">Account Holder Name</label>
                    </div>
                    <div className="form-floating col-lg-4 col-md-6 position-relative edit_field">
                      <input
                        type="text"
                        id="floatingInput"
                        placeholder="Bank Name"
                        {...register("bankName", {
                          required: "Bank Name is required",
                        })}
                        // className={`form-control ${
                        //   errors.bankName ? "is-invalid" : ""
                        // }`}
                        className="form-control"
                        disabled
                      />
                      {errors.bankName && (
                        <div className="invalid-feedback">
                          {errors.bankName.message}
                        </div>
                      )}
                      <button type="button">
                        <img src="/assets/img/editt.png" alt="i" />
                      </button>
                      <label htmlFor="floatingInput">Bank Name</label>
                    </div>
                    <div className="form-floating col-md-6 position-relative edit_field">
                      <input
                        type="text"
                        id="floatingInput"
                        placeholder="Address"
                        {...register("address", {
                          required: false,
                        })}
                        // className={`form-control ${
                        //   errors.address ? "is-invalid" : ""
                        // }`}
                        className="form-control"
                        disabled
                      />
                      {errors.address && (
                        <div className="invalid-feedback">
                          {errors.address.message}
                        </div>
                      )}
                      <button type="button">
                        <img src="/assets/img/editt.png" alt="i" />
                      </button>
                      <label htmlFor="floatingInput">Address</label>
                    </div>

                    <div className="col-md-6 form-group mb-3 position-relative file_upload">
                      <input
                        className="form-control d-none"
                        type="file"
                        name="v"
                        id="v"
                        placeholder="Address"
                        onChange={handleFileChange}
                        multiple
                        accept=".pdf, .png, .jpg, .jpeg"
                      />
                      <label htmlFor="v">
                        <img src="/assets/img/attech.png" alt="i" />
                        Attach a File
                      </label>
                    </div>
                    <p>
                      <small>1. You can upload upto 5 files</small> <br />
                      <small>2. Uploaded files size can be upto 10MB</small>
                    </p>
                    <div className="col-lg-4 col-md-6 form-group mb-3 mt-2 position-relative">
                      {files.map((file, index) => (
                        <div key={index} className="row align-items-center">
                          <div className="col-2">
                            <img
                              className="pdfupload"
                              src="/assets/img/PDF.png"
                              alt="PDF"
                            />
                          </div>
                          <div className="col-8 px-0">
                            <div className="pdfupload_box">
                              <label className=" text-truncate w-100">
                                {file.name}
                              </label>
                            </div>
                          </div>
                          <div className="col-2">
                            <img
                              className="cut"
                              src="/assets/img/cut.png"
                              alt="Remove"
                              onClick={() => removeFile(index)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="form-group col-md-12 mb-lg-4 mb-md-3 mb-3 text-center mt-md-3 mt-2">
                      <div className="checkbox_main">
                        <input
                          className="d-none"
                          type="checkbox"
                          id="checkbox"
                          name="checkbox"
                          value={tnc}
                          onChange={() => setTnc(!tnc)}
                        />

                        <label htmlFor="checkbox">
                          I confirm that all the information provided is correct
                          and accurate.
                        </label>
                      </div>
                    </div>
                    <div className="form-group col-md-12 text-center">
                      <button
                        type="submit"
                        // onClick={() => console.log(tnc, errors)}
                        // disabled={!isValid}
                        className="form_btns mt-2"
                      >
                        Submit
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
        </div>
      </div>
    </Layout>
  );
};

export default NewClaim;
