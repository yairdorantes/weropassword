import PasswordValidator from "password-validator";

export var schema = new PasswordValidator();
schema
  .is()
  .min(8)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(1)
  .has()
  .not()
  .spaces();
