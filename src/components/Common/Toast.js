import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function showErrorToast(content) {
    toast.configure();
    toast.error(content, {
        position: "top-right",
        autoClose: 4000,
        toastId: 'error1',
    });
}

export function showSuccessToast(content) {
    toast.configure();
    toast.success(content, {
        position: "top-right",
        autoClose: 3000,
        toastId: 'success1',
    });
}


export function showWarningToast(content) {
    toast.configure();
    toast.warn(content, {
        position: "top-right",
        autoClose: 4000,
        toastId: 'warn1',
    });
}

export function showInfoToast(content) {
    toast.configure();
    toast.info(content, {
        position: "top-right",
        autoClose: 3000,
        toastId: 'warn1',
    });
}