import { TYPE_ALERT, MESSAGE } from "../../constants";
import { alertManager } from "../../redux/actions/helpersCommon/showAlert";

export const checkEqualPasswords = (password, passwordTwo) => {
  if (password !== passwordTwo) {
    alertManager(TYPE_ALERT.ERROR, MESSAGE.PASSWORDS_NOT_EQUAL);
    return false;
  }
  return true;
};

export const checkPasswordLength = (password) => {
  if (password.length < 6) {
    alertManager(TYPE_ALERT.ERROR, MESSAGE.SMALL_PASSWORD);
    return false;
  }
  return true;
};
