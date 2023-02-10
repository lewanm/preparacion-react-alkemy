import Swal from "sweetalert2";

export default function errorModal(message) {
  Swal.fire({
    title: "Error!",
    text: message,
    icon: "error",
    confirmButtonText: "Cerrar ventana",
  });
}
