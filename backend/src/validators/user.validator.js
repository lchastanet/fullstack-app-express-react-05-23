import { checkSchema } from "express-validator"

export const userSchema = checkSchema({
  email: {
    exists: {
      errorMessage: "Un email est requis",
      options: {
        checkFalsy: true,
      },
    },
    isEmail: {
      errorMessage: "Votre email doit être formaté correctement",
    },
  },
  password: {
    exists: {
      errorMessage: "Un email est requis",
      options: {
        checkFalsy: true,
      },
    },
    isStrongPassword: {
      errorMessage: "Un mot de passe plus sécurisé est requis",
      options: {
        minLength: 6,
        minLowercase: 2,
        minUppercase: 1,
        minNumbers: 1,
      },
    },
  },
  firstName: {
    exists: {
      errorMessage: "Un prénom est requis",
      options: {
        checkFalsy: true,
      },
    },
    isString: {
      errorMessage: "Votre prénom doit être de type text",
    },
  },
  lastName: {
    exists: {
      errorMessage: "Un nom est requis",
      options: {
        checkFalsy: true,
      },
    },
    isString: {
      errorMessage: "Votre nom doit être de type text",
    },
  },
})
