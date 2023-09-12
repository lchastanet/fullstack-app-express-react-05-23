import { doubleCsrf } from "csrf-csrf"

const csrfOptions = {
  getSecret: () => process.env.CSRF_SECRET,
  cookieName: "XSRF-TOKEN",
  cookieOptions: {
    sameSite: "lax",
    path: "*",
    secure: false,
  },
  size: 64,
  ignoredMethods: ["GET", "HEAD", "OPTIONS"],
  getTokenFromRequest: (req) => req.headers["x-csrf-token"],
}

export const { generateToken, doubleCsrfProtection } = doubleCsrf(csrfOptions)
