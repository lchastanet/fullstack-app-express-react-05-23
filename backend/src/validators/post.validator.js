import { checkSchema } from "express-validator"
// import { getOne } from "../models/user.model.js"

export const postSchema = checkSchema({
  content: {
    exists: {
      errorMessage: "Un contenu est requis",
      options: {
        checkFalsy: true,
      },
    },
    isString: {
      errorMessage: "Votre contenu doit être de type text",
    },
    isLength: {
      options: { min: 15, max: 150 },
      errorMessage: "Votre message doit contenir entre 15 et 150 caractères",
    },
  },
  title: {
    exists: {
      errorMessage: "Un titre est requis",
      options: {
        checkFalsy: true,
      },
    },
    isString: {
      errorMessage: "Votre titre doit être de type text",
    },
    isLength: {
      options: { min: 5, max: 20 },
      errorMessage: "Votre message doit contenir entre 5 et 20 caractères",
    },
  },
  user_id: {
    exists: {
      errorMessage: "Un utilisateur est requis",
      options: {
        checkFalsy: true,
      },
    },
    isNumeric: {
      errorMessage: "Votre identifiant doit être de type number",
    },
    // custom: {
    //   options: async (value) => {
    //     const [user] = await getOne(value)

    //     if (!user.length) throw new Error("User not found !")
    //   },
    // },
  },
})
