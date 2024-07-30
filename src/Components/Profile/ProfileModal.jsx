import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileModal = () => {
  const profileData = useSelector((state) => state?.user?.userData);
  return (
    <>
      <div className="container">
        <div className="top_profile text-end">
          <div
            className="dropdown topprofile_dropdown"
            style={{ maxWidth: "250px" }}
          >
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="toppro_details">
                {/* <strong className="">{profileData?.MemberName?.split(" ").join[0]}</strong> */}
                <strong>{profileData?.MemberName}</strong>
                {/* <span>+933 {profileData?.MobileNo}</span> */}
              </div>
              <div className="profille_pic">
                <img src="/assets/img/profilele.png" alt="i" />
              </div>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about-us">
                  About US
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/terms-and-conditions">
                  Terms &amp; Condition
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/help-&-support">
                  Help &amp; Support
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to-bs-toggle="modal"
                  data-bs-target="#logout_modal"
                  href="javascript:;"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
