import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import ProfileModal from "./Profile/ProfileModal";
import {
  NetworkProviderFilter,
  NetworkProviderFilteredData,
  NetworkProviderList,
} from "../AdminHttpServices/dashHttpServices";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import BackBtn from "../utils/BackBtn";

const NetworkProvider = () => {
  const [networkList, setNetworkList] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [showClearFilter, setShowClearFilter] = useState(false);
  const userData = useSelector((state) => state?.user?.userData);

  const [filter, setFilter] = useState({
    IdentityNo: userData?.InsuranceNumber,
    PolicyNo: userData?.PolicyNo,
    MemberNo: userData?.Memberno,
    Region: null,
    ServiceProvider: null,
    ServiceOffered: null,
  });

  useEffect(() => {
    getNetworkProvider();
  }, []);

  const getNetworkProvider = async () => {
    try {
      let { data } = await NetworkProviderList({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });
      if (data && !data?.error) {
        setNetworkList(data?.NetworkList);
        getNetworkProviderFilter();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getNetworkProviderFilter = async () => {
    try {
      let { data } = await NetworkProviderFilter({
        IdentityNo: userData?.InsuranceNumber,
        PolicyNo: userData?.PolicyNo,
        MemberNo: userData?.Memberno,
      });

      if (data && !data?.error) {
        setFilterOptions(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getDataAfterFilter = async () => {
    try {
      let { data } = await NetworkProviderFilteredData(filter);
      if (data && !data?.error) {
        setNetworkList(data?.NetworkList);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      {/* <ProfileModal /> */}
      <div className="networks_main pt-5 pb-5">
        <div className="container pb-2">
          <div className="row">
            <div className="col-md-12 mb-lg-4 mb-md-3 mb-3">
              <div className="row info_head align-items-center mb-md-3">
                <div className="col d-flex align-items-center">
                  <BackBtn />
                  <h2>Providers Network</h2>
                </div>
                <div className="col-lg-auto col-md-12 mt-lg-0 mt-3 mt-2 mb-md-0 mb-3">
                  <div className="row align-items-center justify-content-end">
                    <div className="col-md-auto mb-md-0 mb-2">
                      <div className="filter_data">
                        {networkList?.length} results found
                      </div>
                    </div>
                    <div className="col-md-auto col-6">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        className="filterdo"
                      >
                        Filter <img src="/assets/img/mage_filter.png" alt />
                      </button>
                    </div>
                    {showClearFilter && (
                      <div className="col-md-auto col-6">
                        <button
                          onClick={() => {
                            setFilter({
                              ...filter,
                              ServiceProvider: null,
                              Region: null,
                              ServiceOffered: null,
                            });
                            getNetworkProvider();
                            setShowClearFilter(false);
                            // document.getElementById("reset").click();
                          }}
                          className="removefilter"
                        >
                          Remove Filter
                          <img src="/assets/img/remove.png" alt="Remove" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {networkList && networkList?.length > 0 ? (
                  networkList?.map((item, i) => (
                    <>
                      <div className="col-md-4 mb-4 ">
                        <div className="h-100  my_shadow">
                          <Link className="networksbox ">
                            <h3>{item?.ProviderName}</h3>
                            <p>{item?.Address}</p>
                            {/* <p>{item?.Address?.split(/ZIP CODE|Zip Code/)[0]}</p> */}
                          </Link>
                        </div>
                      </div>
                    </>
                  ))
                ) : (
                  <p className="text-center">No Network Providers</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Filter
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-12 my-2">
                      <select
                        onChange={(e) =>
                          setFilter({
                            ...filter,
                            ServiceProvider: e.target.value,
                          })
                        }
                        className="w-100 p-2 rounded-1"
                      >
                        <option
                          selected={filter?.ServiceProvider === null}
                          className="py-5"
                          value=""
                        >
                          Service Provider
                        </option>
                        {filterOptions?.ServiceProvider &&
                          filterOptions?.ServiceProvider?.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-md-6 my-2">
                      <select
                        onChange={(e) =>
                          setFilter({
                            ...filter,
                            Region: e.target.value,
                          })
                        }
                        className="w-100 p-2 rounded-1"
                      >
                        <option
                          selected={filter?.Region === null}
                          className="py-5"
                          value=""
                        >
                          Select City
                        </option>
                        {filterOptions?.Region &&
                          filterOptions?.Region?.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-md-6 my-2">
                      <select
                        onChange={(e) =>
                          setFilter({
                            ...filter,
                            ServiceOffered: e.target.value,
                          })
                        }
                        className="w-100 p-2 rounded-1"
                      >
                        <option
                          selected={filter?.ServiceOffered === null}
                          className="py-5"
                          value=""
                        >
                          Services Offered
                        </option>
                        {filterOptions?.ServicesOffered &&
                          filterOptions?.ServicesOffered?.map((item, i) => (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={() => {
                    getDataAfterFilter();
                    setShowClearFilter(true);
                  }}
                  className="btn btn-primary rounded-pill"
                  data-bs-dismiss="modal"
                >
                  Apply Filter
                </button>
                <button type="reset" className="d-none">
                  reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NetworkProvider;
