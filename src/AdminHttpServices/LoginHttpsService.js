import Swal from "sweetalert2";
import mainHttpService from "./mainHttpService";

export async function adminLogin(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/login`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function Registration(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/Register`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function RegistrationCheck(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/RegistrationCheck`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ProfileDetails(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Profile/GetProfileDetails`,
      formData
    );

    if (data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDesc,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    console.log(error)
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDesc,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function UpdateProfileDetails(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Profile/UpdateProfile`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ForgotPasswordApi(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/ForgotPassword`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ResetPassword(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/ResetPassword`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function VerifyOtp(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/VerifyOTP`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function VerifyOTPToRestPassword(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/VerifyOTPToRestPassword`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function SendOtp(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/ResendOTP`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function UpdatePassword(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Registration/UpdatePassword`,
      formData
    );
    if (data && data?.StatusCode === "F") {
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error.response.data.StatusDescription,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
