import UnauthorizedError from "../errors/UnauthorizedError.js"

export const checkRoles = (...rolesToChecks) => {
  return (req, res, next) => {
    const userRoles = JSON.parse(req.user.roles)

    if (userRoles.some((userRole) => rolesToChecks.includes(userRole))) {
      return next()
    }

    throw new UnauthorizedError()
  }
}
