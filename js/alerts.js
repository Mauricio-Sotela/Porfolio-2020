(async () => {
  const { value: name } = await Swal.fire({
    title: "Welcome!",
    //text:
    html: "<b> Mauricio Responsive Website </b>",
    icon: "success",
    confirmButtonText: "Go to the page",
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: true,
    input: "text",
    inputPlaceholder: "Write  your name"
  });

  if (name) {
    Swal.fire({
      title: "Hello!",
      html: `<b> ${name}</b>`,
      backdrop: true,
      timer: 6000,
      timerProgressBar: true,
      //toast: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: true,
      stopKeydownPropagation: true
    });
  }
})();
