import Icons from "../../images/iconsSmall";
import VALUE from "./valuesOfAttributes";

const signUpElements = [
  {
    id: 1,
    name: VALUE.USER_NAME,
    type: VALUE.TEXT,
    placeholder: VALUE.FULL_NAME,
    icon: Icons.faUser,
  },
  {
    id: 2,
    name: VALUE.EMAIL,
    type: VALUE.TEXT,
    placeholder: VALUE.EMAIL_ADDRESS,
    icon: Icons.faEnvelope,
  },
  {
    id: 3,
    name: VALUE.PASSWORD,
    type: VALUE.PASSWORD,
    placeholder: VALUE.PASSWORD_PLACEHOLDER,
    icon: Icons.faLock,
  },
  {
    id: 4,
    name: VALUE.PASSWORD_TWO,
    type: VALUE.PASSWORD,
    placeholder: VALUE.CONFIRM_PASSWORD,
    icon: Icons.faLock,
  },
];

export default signUpElements;
