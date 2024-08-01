import Swal from "sweetalert2";
import mainHttpService from "./mainHttpService";

export async function ClaimList(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Claims/ClaimsListDetails`,
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
        title: error.response.data.StatusDesc,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ClaimDetails(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Claims/ClaimDetails`,
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
        title: error.response.data.StatusDesc,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function ClaimInfo(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Claims/GetClaimInfo`,
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
        title: error.response.data.StatusDesc,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}
export async function AddNewClaim(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Claims/AddClaim`,
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
export async function NetworkProviderList(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Provider/GetNetWorkList`,
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
export async function NetworkProviderFilter(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Provider/GetNetWorkFilterDetails`,
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
export async function NetworkProviderFilteredData(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Provider/GetNetWorkListByFilter`,
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
export async function PolicyBenefits(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Policy/PolicyBenefits`,
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
export async function GetPolicyInfo(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Policy/PolicyInformation`,
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
export async function GetMemberDeailsToRaiseComplaint(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Complaints/GetMemberDeailsToRaiseComplaint`,
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
export async function GetSubCategory(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Complaints/GetSubCategory`,
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
export async function AddNewComplaints(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Complaints/AddComplaint`,
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
export async function ComplaintsList(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Complaints/ListOfComplaints`,
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
export async function NotificationList(formData) {
  try {
    const { data } = await mainHttpService.post(
      `${process.env.REACT_APP_OURAPI}/Notification/SendNotification`,
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
