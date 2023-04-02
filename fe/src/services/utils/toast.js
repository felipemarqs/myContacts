const toast = (type, text) => {
  const event = new CustomEvent("addtoast", {
    detail: {
      type: type,
      text: text,
    },
  });

  document.dispatchEvent(event);
};

export default toast;
