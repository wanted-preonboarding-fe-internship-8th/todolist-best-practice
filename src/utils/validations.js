export const emailValidation = (email) => {
  const emailReg = /^[a-zA-Z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/;
  return emailReg.test(email);
};

export const passwordValidation = (password) => password.length >= 8;
