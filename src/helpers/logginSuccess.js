import Swal from "sweetalert2";
export default function logginSuccess(message, seconds) {
  const time = seconds * 1000;
  let timerInterval;
  Swal.fire({
    icon: "success",
    title: message,
    html: "La ventana se va a cerrar en <b></b> segundos.",
    timer: time,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("Ver que hago aca jiji!");
    }
  });
}
