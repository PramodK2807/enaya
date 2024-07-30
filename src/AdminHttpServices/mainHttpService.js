import axios from "axios";
import SecureLS from "secure-ls";
import Swal from "sweetalert2";
import store from '../app/store'
import clearUserInfo from '../app/slice/userInfoSlice'
const ls = new SecureLS();

// Error callback function
const errorCallBack = (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (error.response && error.response.status === 401) {
    ls.remove("enaya-token");
    window.location.href = "/login";
    store.dispatch(clearUserInfo());
  }

  if (!expectedError) {
    // toast.error("An unexpected error occurred");
    Swal.fire({
      toast: true,
      icon: "error",
      position: "top-end",
      title: error.response.data.StatusDescription,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    })
  }

  return Promise.reject(error);
};

axios.interceptors.request.use(async (req) => {
  const token = await ls.get("enaya-token");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});

axios.interceptors.response.use(null, errorCallBack);

const token = ls.get("enaya-token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
