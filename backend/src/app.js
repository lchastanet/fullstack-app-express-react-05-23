import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import postsRoutes from "./routes/post.routes.js"
import usersRoutes from "./routes/user.routes.js"
import commentsRoutes from "./routes/comment.routes.js"
import authRoutes from "./routes/auth.routes.js"
import errorHandler from "./middlewares/errorHandler.js"
import authorization from "./middlewares/authorization.js"
import { doubleCsrfProtection } from "./helpers/csrfHelper.js"
import { getCsrfToken } from "./controllers/auth.controller.js"

const app = express()

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
)

app.use(cookieParser())
app.use(express.json())
app.use(doubleCsrfProtection)

//app.get("/csrf-token", getCsrfToken)
app.use("/post", authorization, postsRoutes)
app.use("/user", usersRoutes)
app.use("/comment", commentsRoutes)
app.use("/auth", authRoutes)
app.use(errorHandler)

app.get("*", (req, res) => res.sendStatus(404))

export default app
