import express from "express"
import cors from "cors"

import postsRoutes from "./routes/post.routes.js"
import usersRoutes from "./routes/user.routes.js"
import commentsRoutes from "./routes/comment.routes.js"
import authRoutes from "./routes/auth.routes.js"
import errorHandler from "./middlewares/errorHandler.js"

const app = express()

app.use(cors({ origin: process.env.FRONTEND_URL }))

app.use(express.json())

app.use("/post", postsRoutes)
app.use("/user", usersRoutes)
app.use("/comment", commentsRoutes)
app.use("/auth", authRoutes)
app.use(errorHandler)

app.get("*", (req, res) => res.sendStatus(404))

export default app
