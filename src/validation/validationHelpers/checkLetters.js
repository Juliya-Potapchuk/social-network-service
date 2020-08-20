import { TYPE_ALERT } from "../../constants";
import { alertManager } from "../../redux/actions/helpersCommon/showAlert";

  // It checks if there are letters in the fields
export const checkLetters = (arrOfFields, message) => {
  for (let i = 0; i < arrOfFields.length; i += 1) {
    const letterInText = arrOfFields[i]
      .replace(/[^a-zA-ZА-Яа-яЁё]/gi, "")
      .replace(/\s+/gi, ", ");
    if (letterInText.length === 0) {
    alertManager(TYPE_ALERT.ERROR, message);
      return false;
    }
  }
  return true;
};
