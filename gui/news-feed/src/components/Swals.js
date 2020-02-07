import Swal from "sweetalert2";

export const smallSwal = (icon, title) => {
    Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
    }).fire({
        icon,
        title,
    });
};

export const bigSwal = (icon, title, text, footer) => {
    Swal.fire({
        icon,
        title,
        text,
        footer,
    });
};
