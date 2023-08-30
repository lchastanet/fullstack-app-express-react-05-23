import argon2 from "argon2"

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
}

export const hash = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions)
}

export const verify = (hashedPassword, plainPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions)
}
