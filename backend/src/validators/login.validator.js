import { checkSchema } from "express-validator"

export const loginSchema = checkSchema({
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
      errorMessage: "Un mot de passe sécurisé est requis",
      options: {
        checkFalsy: true,
      },
    },
  },
})
