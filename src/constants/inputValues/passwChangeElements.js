import Icons from "../../images/iconsSmall"
import VALUE from './valuesOfAttributes'

export const passwChangeElements = [
  {
    id: 1,
    name: VALUE.PASSWORD,
    type: VALUE.PASSWORD,
    placeholder: VALUE.NEW_PASSWORD,
    icon: Icons.faLock,
  },
  {
    id: 2,
    name: VALUE.PASSWORD_TWO,
    type: VALUE.PASSWORD,
    placeholder: VALUE.CONFIRM_NEW_PASSWORD ,
    icon: Icons.faLock,
  }
];