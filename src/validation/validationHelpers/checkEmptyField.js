import { MESSAGE, TYPE_ALERT } from "../../constants";
import { alertManager } from "../../redux/actions/helpersCommon/showAlert";

export const checkEmptyField = (arrOfFields) => {
  for (let i = 0; i < arrOfFields.length; i += 1) {
    if (arrOfFields[i].length === 0) {
      alertManager(TYPE_ALERT.ERROR, MESSAGE.EMPTY_FIELD);
      return true;
    }
  }
  return false;
};
