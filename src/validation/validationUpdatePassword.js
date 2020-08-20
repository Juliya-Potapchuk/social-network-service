import { checkEmptyField } from "./validationHelpers/checkEmptyField";
import {
  checkEqualPasswords,
  checkPasswordLength,
} from "./validationHelpers/checkPassword";

export const validationUpdatePassword = (arrOfFields) => {
  const [password, passwordTwo] = [arrOfFields[0], arrOfFields[1]];

  // It checks if there is an empty field
  const isEmptyField = checkEmptyField(arrOfFields);
  if (isEmptyField) {
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
