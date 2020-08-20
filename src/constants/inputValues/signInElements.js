import Icons from "../../images/iconsSmall";
import VALUE from "./valuesOfAttributes";

export const signInElements = [
  {
    id: 1,
    name: VALUE.EMAIL,
    type: VALUE.TEXT,
    placeholder: VALUE.EMAIL_ADDRESS,
    icon: Icons.faEnvelope,
  },
  {
    id: 2,
    name: VALUE.PASSWORD,
    type: VALUE.PASSWORD,
    placeholder: VALUE.PASSWORD_PLACEHOLDER,
    icon: Icons.faLock,
  },
];
