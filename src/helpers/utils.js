import { getLS, setLS } from './localStorage';
import notification from './notifications';

export const objHas = (object, property) => {
  return Object.prototype.hasOwnProperty.call(object, property);
};
export const checkQuantityClick = (key, amount) => {
  const quantity = getLS(key);
  if (+quantity < amount - 1) {
    setLS(key, +quantity + 1);
  } else if (+quantity === amount - 1) {
    setLS(key, new Date().getTime());
  } else if (+quantity + 60000 > new Date().getTime()) {
    notification({
      type: 'error',
      message: 'Send should be blocked for 1 minute',
    });
    return false;
  } else if (+quantity + 60000 < new Date().getTime()) {
    setLS(key, 1);
  }
  return true;
};
