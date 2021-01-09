import CryptoJS from 'crypto-js';

const cryptoKey = 'PGexp2SN8mf6bAgX8553XY3m';

const coder = value => {
  const cryptedText = CryptoJS.AES.encrypt(JSON.stringify(value), cryptoKey);
  return cryptedText.toString();
};
const deCoder = value => {
  const bytes = CryptoJS.AES.decrypt(value, cryptoKey);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  return JSON.parse(decrypted);
};

export const getLS = key => {
  try {
    const lsValue = localStorage.getItem(`auth_${key}`);
    if (lsValue) {
      return deCoder(lsValue);
    }
    throw new Error(`I do not find auth_${key}`);
  } catch (error) {
    return null;
  }
};

export const setLS = (key, value) => {
  try {
    localStorage.setItem(`auth_${key}`, coder(value));
  } catch (error) {
    return null;
  }
};
