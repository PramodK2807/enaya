import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ProfileModal from "../Profile/ProfileModal";
import {
  AddNewClaim,
  ClaimInfo,
} from "../../AdminHttpServices/dashHttpServices";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useSelector } from "react-redux";
import moment from "moment";
import Swal from "sweetalert2";
import BackBtn from "../../utils/BackBtn";

const NewClaim = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [countryListOptions, setCountryListOptions] = useState([]);
  const [patientListOptions, setPatientListOptions] = useState([]);
  const [memberListOptions, setMemberListOptions] = useState([]);
  const [files, setFiles] = useState([]);
  const [tnc, setTnc] = useState(false);

  const userData = useSelector((state) => state?.user?.userData);
  const moreInfo = useSelector((state) => state?.user?.moreInfoAboutUser);
  console.log(moreInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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

  const getClaimInfo = async () => {
    try {
      let { data } = await ClaimInfo({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });
      if (data && !data?.error) {
        if (data?.countryList) {
          const countryList = data?.countryList.map((country) => ({
            value: country.CountryCode,
            label: country.CountryName,
          }));
          setCountryListOptions(countryList);
        }
        if (data?.PatientType) {
          const PatientList = data.PatientType.map((p) => ({
            value: p,
            label: p,
          }));
          setPatientListOptions(PatientList);
        }
        if (data?.EmployeeList) {
          const EmpList = data.EmployeeList.map((p) => ({
            value: p?.MemberNo,
            label: p?.Name,
          }));
          setMemberListOptions(EmpList);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (info) => {
    console.log(info, files);
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
      const formData = new FormData();
      formData.append("Country", selectedCountry?.value || "");
      formData.append("PatientType", selectedPatient?.value || "");
      formData.append("RelationMemberNo", selectedMember?.value || "");
      formData.append("serviceProviderName", info?.serviceProviderName || "");
      formData.append(
        "ClaimIncurredDate",
        moment(new Date()).format("('YYYY-MM-DD')")
      );

      if (selectedPatient === "IPD") {
        formData.append(
          "ClaimDischargeDate",
          moment(info?.claimDischargeDate).format("('YYYY-MM-DD')")
        );
        formData.append(
          "ClaimAddmissionDate",
          moment(info?.claimAdmissionDate).format("('YYYY-MM-DD')")
        );
      }
      if (selectedPatient === "OPD") {
        formData.append(
          "TreatmentDate",
          info?.treatmentDate
            ? moment(info?.treatmentDate).format("('YYYY-MM-DD')")
            : ""
        );
      }
      formData.append("ClaimedAmount", info?.claimedAmount || "");
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
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    let totalFileSize = newFiles.reduce((acc, file) => acc + file.size, 0);

    if (
      files.length === 0 &&
      newFiles.length === 1 &&
      newFiles[0].size > 5 * 1024 * 1024
    ) {
      Swal.fire({
        toast: true,
        icon: "warning",
        position: "top-end",
        title: "Single file size exceeds 5MB limit",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    }

    const combinedFiles = [...files, ...newFiles];
    totalFileSize += files.reduce((acc, file) => acc + file.size, 0);

    if (combinedFiles.length > 1 && totalFileSize > 10 * 1024 * 1024) {
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

    setFiles(combinedFiles);
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
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
                      <div className="form-control position-relative">
                        <Select
                          placeholder="Select a country"
                          options={countryListOptions}
                          value={selectedCountry}
                          onChange={(selectedMembers) =>
                            setSelectedCountry(selectedMembers)
                          }
                          className={`w-100 h-100 ${
                            errors.country ? "is-invalid" : ""
                          }`}
                        />
                        {errors.country && (
                          <div className="invalid-feedback">
                            {errors.country.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-floating col-lg-4 col-md-6">
                      <input
                        type="text"
                        id="floatingInput"
                        placeholder="Service Provider Name"
                        className={`form-control ${
                          errors.serviceProvider ? "is-invalid" : ""
                        }`}
                        {...register("serviceProvider", {
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
                      {errors.serviceProvider && (
                        <div className="invalid-feedback">
                          {errors.serviceProvider.message}
                        </div>
                      )}
                      <label htmlFor="floatingInput">
                        Service Provider Name
                      </label>
                    </div>
                    <div className="form-floating col-lg-4 col-md-6">
                      <div className="form-control position-relative">
                        <Select
                          value={selectedPatient}
                          options={patientListOptions}
                          placeholder="Patient Type"
                          className={`w-100 h-100 ${
                            errors.patientType ? "is-invalid" : ""
                          }`}
                          onChange={(selectedPatient) =>
                            setSelectedPatient(selectedPatient)
                          }
                        />
                        {errors.patientType && (
                          <div className="invalid-feedback">
                            {errors.patientType.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-floating col-lg-4 col-md-6">
                      <div className="form-control position-relative">
                        <Select
                          options={memberListOptions}
                          value={selectedMember}
                          placeholder="Select Member"
                          className={`w-100 h-100 ${
                            errors.member ? "is-invalid" : ""
                          }`}
                          onChange={(selectedMember) =>
                            setSelectedMember(selectedMember)
                          }
                        />
                        {errors.member && (
                          <div className="invalid-feedback">
                            {errors.member.message}
                          </div>
                        )}
                      </div>
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
                    {selectedPatient?.value === "OPD" && (
                      <div className="form-floating col-lg-4 col-md-6">
                        <input
                          type="date"
                          id="floatingInput"
                          {...register("treatmentDate", {
                            required: "Treatment Date is required",
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
                    {selectedPatient?.value === "IPD" && (
                      <>
                        {" "}
                        <div className="form-floating col-lg-4 col-md-6">
                          <input
                            type="date"
                            id="floatingInput"
                            {...register("claimAdmissionDate", {
                              required: "Admission Date is required",
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
                        <div className="form-floating col-lg-4 col-md-6">
                          <input
                            type="date"
                            id="floatingInput"
                            {...register("claimDischargeDate", {
                              required: "Discharge Date is required",
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
                      <button type="submit">
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
                      <button type="submit">
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
                      <button type="submit">
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
                      <button type="submit">
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
                          required: "Address is required",
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
                      <button type="submit">
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
                        accept=".pdf"
                      />
                      <label htmlFor="v">
                        <img src="/assets/img/attech.png" alt="i" />
                        Attach a File
                      </label>
                    </div>
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
                      <button type="submit" className="form_btns mt-2">
                        Submit
                      </button>
                      <button type="reset" className="d-none">
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
