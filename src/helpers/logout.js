import Swal from "sweetalert2";
import { redirect } from "react-router-dom";

export default function logout() {
  //localStorage.clear()
  Swal.fire({
    title: "¿seguro que quiere salir?",
    showDenyButton: true,
    confirmButtonText: "Si",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      return redirect("/");
    }
  });
}
