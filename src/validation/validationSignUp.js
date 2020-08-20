import { checkEmail } from "./validationHelpers/checkEmail";
import { checkLetters } from "./validationHelpers/checkLetters";
import { checkEmptyField } from "./validationHelpers/checkEmptyField";
import {
  checkEqualPasswords,
  checkPasswordLength,
} from "./validationHelpers/checkPassword";
import { MESSAGE } from "../constants";

export const validationSignUp = (arrOfFields) => {
  const [userName, email, password, passwordTwo] = [
    arrOfFields[0],
    arrOfFields[1],
    arrOfFields[2],
    arrOfFields[3],
  ];

  // It checks if there is an empty field
  const isEmptyField = checkEmptyField(arrOfFields);
  if (isEmptyField) {
    return false;
  }

  // It checks if there are letters in the fields userName/email
  const arrNameEmail = [userName, email];
  const message = MESSAGE.EMAIL_NAME_WITHOUT_LETTERS;
  const haveLetters = checkLetters(arrNameEmail, message);
  if (!haveLetters) {
    return false;
  }

  // It checks if email is incorrect
  const isValidEmail = checkEmail(email);
  if (!isValidEmail) {
    return false;
  }

  const isEqualPasswords = checkEqualPasswords(password, passwordTwo);
  if (!isEqualPasswords) {
    return false;
  }

  const isCorrectLength = checkPasswordLength(password);
  if (!isCorrectLength) {
    return false;
  }

  return true;
};
