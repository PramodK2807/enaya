import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import {
  AddNewComplaints,
  ComplaintsList,
  GetMemberDeailsToRaiseComplaint,
  GetSubCategory,
} from "../../AdminHttpServices/dashHttpServices";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RegisterComplaint = () => {
  const userData = useSelector((state) => state?.user?.userData);
  const [profileData, setProfileData] = useState({});
  const [subCategory, setSubCategory] = useState([]);
  const [notes, setNotes] = useState("");
  const [selectedComplaintType, setSelectedComplaintType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [files, setFiles] = useState([]);
  const [listOfComplaints, setListOfComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMembersToRaiseComp();
    getComplaints();
  }, []);

  const getComplaints = async () => {
    try {
      let { data } = await ComplaintsList({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });
      if (data && !data?.error) {
        setListOfComplaints(data?.ComplaintsDetailsList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSubCat = async (id) => {
    try {
      let { data } = await GetSubCategory({ CatagoryId: id });
      if (data && !data?.error) {
        setSubCategory(data?.SubCategoryList);
        setSelectedSubCategory(data?.SubCategoryList[0]?.CallSubCatId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMembersToRaiseComp = async () => {
    try {
      let { data } = await GetMemberDeailsToRaiseComplaint({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });

      if (data && !data?.error) {
        setProfileData(data);
        setSelectedComplaintType(data?.RequestType[0]?.CallTypeId);
        setSelectedCategory(data?.CategoryList[0]?.CallCatgId);
        getSubCat(data?.CategoryList[0]?.CallCatgId);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!profileData?.details?.Email || !profileData?.details?.PhoneNumber) {
        Swal.fire({
          toast: true,
          icon: "warning",
          position: "top-end",
          title: "Email or Phone Number is mandatory",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        return;
      }
      const formData = new FormData();
      formData.append("RequestTypeId", selectedComplaintType);
      formData.append("CategoryTypeId", selectedCategory);
      formData.append("SubCategoryTypeId", selectedSubCategory);
      formData.append("email", profileData?.details?.Email);
      formData.append("PhoneNo", profileData?.details?.PhoneNumber);
      formData.append("IdentityNo", profileData?.details?.IdentityNo);
      formData.append("MemberNo", profileData?.details?.MemberNo);
      formData.append("Notes", notes?.trim());
      formData.append("Name", profileData?.details?.FullName);
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          formData.append("File", files[i]);
        }
      }

      let { data } = await AddNewComplaints(formData);
      if (data && !data?.error) {
        Swal.fire({
          toast: true,
          icon: "success",
          position: "top-end",
          title: "Complaint submitted successfully",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  return (
    <Layout>
      <>
        <section className="common_banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <div className="common_img">
                  <img src="/assets/img/fraud.png" alt />
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="common_content">
                  <h2>
                    Make <span>an Inquiry </span> or Complaint
                  </h2>
                  <p>
                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="claims_management py-5">
          <div className="container">
            <div className="row">
              <div className=" d-flex justify-content-end">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#forgotpassword"
                  className="form_btns mb-3"
                  alt="i"
                  type="button"
                >
                  View All Complaints
                </button>
              </div>
              <div className="col-md-12 mt-lg-3">
                <form
                  action="#"
                  className="row form_desig"
                  onSubmit={handleSubmit}
                >
                  <div className="form-floating select_box col-lg-4 col-md-6">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      onChange={(e) => setSelectedComplaintType(e.target.value)}
                    >
                      {profileData?.RequestType &&
                        profileData.RequestType.map((item) => (
                          <option
                            key={item?.CallTypeId}
                            value={item?.CallTypeId}
                          >
                            {item?.CallType}
                          </option>
                        ))}
                    </select>
                    <label className="mb-2" htmlFor="floatingSelect">
                      Request Type
                    </label>
                  </div>

                  <div className="form-floating select_box col-lg-4 col-md-6">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        getSubCat(e.target.value);
                      }}
                    >
                      {profileData?.CategoryList &&
                        profileData.CategoryList.map((item) => (
                          <option
                            key={item?.CallCatgId}
                            value={item?.CallCatgId}
                          >
                            {item?.CategoryName}
                          </option>
                        ))}
                    </select>
                    <label className="mb-2" htmlFor="floatingSelect">
                      Category Type
                    </label>
                  </div>

                  <div className="form-floating select_box col-lg-4 col-md-6">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      onChange={(e) => setSelectedSubCategory(e.target.value)}
                    >
                      {subCategory &&
                        subCategory.map((item) => (
                          <option
                            key={item?.CallSubCatId}
                            value={item?.CallSubCatId}
                          >
                            {item?.SubCategoryName}
                          </option>
                        ))}
                    </select>
                    <label className="mb-2" htmlFor="floatingSelect">
                      Sub Category Type
                    </label>
                  </div>

                  <div className="form-floating col-lg-4 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Full Name"
                      value={profileData?.details?.FullName}
                      disabled
                    />
                    <label htmlFor="floatingInput">Full Name</label>
                  </div>
                  <div className="form-floating col-lg-4 col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={profileData?.details?.Email || ""}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          details: {
                            ...profileData.details,
                            Email: e.target.value,
                          },
                        })
                      }
                    />
                    <label htmlFor="floatingInput">Email</label>
                  </div>

                  <div className="form-floating col-lg-4 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={profileData?.details?.PhoneNumber || ""}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          details: {
                            ...profileData.details,
                            PhoneNumber: e.target.value,
                          },
                        })
                      }
                    />
                    <label htmlFor="floatingInput">Phone Number</label>
                  </div>
                  <div className="form-floating col-lg-4 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="ID Number"
                      value={profileData?.details?.IdentityNo}
                      disabled
                    />
                    <label htmlFor="floatingInput">ID Number</label>
                  </div>
                  <div className="form-floating col-lg-4 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Member Number"
                      value={profileData?.details?.MemberNo}
                      disabled
                    />
                    <label htmlFor="floatingInput">Member Number</label>
                  </div>
                  <div className="form-floating col-lg-4 col-md-6">
                    <textarea
                      className="form-control"
                      style={{ height: 100 }}
                      name="notes"
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <label htmlFor="notes">Type your note here...</label>
                  </div>
                  <div className="form-group col-lg-4 col-md-6 position-relative file_upload">
                    <input
                      className="form-control d-none"
                      type="file"
                      name="v"
                      id="v"
                      onChange={handleFileChange}
                      placeholder="Attach a File"
                      multiple
                      accept=".pdf, .png, .jpg, .jpeg"
                    />
                    <label htmlFor="v">
                      <img src="/assets/img/attech.png" alt />
                      Attach a File
                    </label>
                    <p>
                      <small>1. You can upload upto 5 files</small> <br />
                      <small>2. Uploaded files size can be upto 10MB</small>
                    </p>
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

                  <div className="form-group col-md-12 text-center mt-md-3">
                    <button type="submit" className="form_btns">
                      Submit
                    </button>
                  </div>
                </form>
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
                  />
                  <div className="">
                    <div>
                      {listOfComplaints && listOfComplaints?.length ? (
                        listOfComplaints?.map((item, i) => (
                          <>
                            <div className="bg-light my-3 p-2 border rounded">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <small>TicketId: </small>
                                  <small>{item?.TicketId}</small>
                                </div>
                                <div className="bg-success text-white rounded-pill px-3 py-1">
                                  <small>{item?.TicketStatus}</small>
                                </div>
                              </div>
                              <div>
                                <div className="fw-bold text-start">
                                  <small>{item?.TicketDescription}</small>
                                </div>
                                <div className="text-start">
                                  <small>Date: </small>
                                  <small> {item?.TicketDateTime}</small>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      ) : (
                        <h3>No Complaints Found</h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
    </Layout>
  );
};

export default RegisterComplaint;
