

const telInputs = document.querySelectorAll('input[type="tel"]');

telInputs.forEach((input) => {
  const telMask = new IMask(input, {
    mask: '+{38}(000)000-00-00'
  });
});
