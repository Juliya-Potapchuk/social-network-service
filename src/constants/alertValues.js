const SUCCESS = "success";
const ERROR = "error";

// error messages
const EMPTY_FIELD = "The field can't be empty.";
const ALL_FIELDS_WITHOUT_LETTERS = "Each field must contain letters.";
const PASSWORDS_NOT_EQUAL = "Passwords must be equal.";
const SMALL_PASSWORD = "The password must be at least 6 characters.";
const INCORRECT_EMAIL = "Incorrect email."
const EMAIL_NAME_WITHOUT_LETTERS = "Name and email must contain letters.";
const EMAIL_WITHOUT_LETTERS = "The email must contain letters.";

// success messages
const SENT_POST_SUCCESS = "Your post has been sent successfully!";
const DELETE_POST_SUCCESS = "Your post has been deleted successfully!";
const SAVE_SETTINGS_SUCCESS = "Your changes have been saved!";
const SIGN_UP_SUCCESS = "The registration had been successfully!";
const RESET_PASSWORD_SUCCESS = "Check your e-mail and log in with an updated password.";
const UPDATE_PASSWORD_SUCCESS = "Your password has been changed successfully!";

export const TYPE_ALERT = { SUCCESS, ERROR };
export const MESSAGE = {
  EMPTY_FIELD,
  ALL_FIELDS_WITHOUT_LETTERS,
  PASSWORDS_NOT_EQUAL,
  SMALL_PASSWORD,
  INCORRECT_EMAIL,
  EMAIL_NAME_WITHOUT_LETTERS,
  SENT_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  SAVE_SETTINGS_SUCCESS,
  SIGN_UP_SUCCESS,
  EMAIL_WITHOUT_LETTERS,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_SUCCESS
};

