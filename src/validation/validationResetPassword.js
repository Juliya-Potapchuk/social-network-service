import { checkEmail } from "./validationHelpers/checkEmail";
import { checkLetters } from "./validationHelpers/checkLetters";
import { checkEmptyField } from "./validationHelpers/checkEmptyField";
import { MESSAGE } from "../constants";

export const validationResetPassword = (arrOfFields) => {
  const email = arrOfFields[0];

  // It checks if there is an empty field
  const isEmptyField = checkEmptyField(arrOfFields);
  if (isEmptyField) {
    return false;
  }

  // It checks if there are letters in the field email
  const message = MESSAGE.EMAIL_WITHOUT_LETTERS;
  const haveLetters = checkLetters(arrOfFields, message);
  if (!haveLetters) {
    return false;
  }

  // It checks if email is incorrect
  const isValidEmail = checkEmail(email);
  if (!isValidEmail) {
    return false;
  }

  return true;
};
