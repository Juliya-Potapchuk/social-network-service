import { MESSAGE } from "../constants";
import { checkEmptyField } from "./validationHelpers/checkEmptyField";
import { checkLetters } from "./validationHelpers/checkLetters";

export const validationPost = (arrOfFields) => {
  // It checks if there is an empty field
  const isEmptyField = checkEmptyField(arrOfFields);
  if (isEmptyField) {
    return false;
  }

  // It checks if there are letters in the fields
  const messages = MESSAGE.ALL_FIELDS_WITHOUT_LETTERS;
  const haveLetters = checkLetters(arrOfFields, messages);
  if (!haveLetters) {
    return false;
  }

  return true;
};
