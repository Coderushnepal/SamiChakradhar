import iziToast from "izitoast";

iziToast.settings({
  timeout: 3000,
  resetOnHover: true,
  progressBar:false,
});

export const success = ({ title, message }) => {
  iziToast.success({
    title,
    message,
    progressBarColor: "	#00ff00",
  });
};

export const error = ({ title, message }) => {
  iziToast.error({
    title,
    message,
    progressBarColor: "#ff0000",
  });
};
