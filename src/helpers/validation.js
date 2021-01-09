export const validationName = value => {
  return value.replace(/\s/g, '').length > 3;
};
export const validationPassword = password => {
  if (password.length < 8) return false;
  const regExp = /(?=^.{8,25}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).*$/;
  if (!regExp.test(password)) return false;
  return true;
};
