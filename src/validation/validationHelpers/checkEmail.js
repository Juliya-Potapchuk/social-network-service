import { MESSAGE, TYPE_ALERT } from "../../constants";
import { alertManager } from "../../redux/actions/helpersCommon/showAlert";

// It checks if email is incorrect
export const checkEmail = (email) => {
  const lastAtPosition = email.lastIndexOf("@");
  const lastDotPosition = email.lastIndexOf(".");

  const isValid =
    lastAtPosition < lastDotPosition &&
    lastAtPosition > 0 &&
    lastDotPosition > 2 &&
    email.length - lastDotPosition > 2;
    
  if (!isValid) {
    alertManager(TYPE_ALERT.ERROR, MESSAGE.INCORRECT_EMAIL);
    return false;
  }
  return true;
};

//   lastAtPos < lastDotPos: Last@ должен быть перед last. ,так как @ не может быть
//   частью имени сервера.
//   lastAtPos > 0 : должно быть что-то (имя пользователя email) перед последним @ .
//   lastDotPos > 2 : перед последней точкой должно быть не менее трех символов, например a@b.com .
//   (str.length - lastDotPos) > 2 : после последней точки должно быть достаточно символов,
//    чтобы образовать двухсимвольный домен
