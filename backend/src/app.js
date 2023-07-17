import express from "express"
import cors from "cors"

import postsRoutes from "./routes/post.routes.js"
import usersRoutes from "./routes/user.routes.js"
import commentsRoutes from "./routes/comment.routes.js"

const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:3000" }))

app.use("/post", postsRoutes)
app.use("/user", usersRoutes)
app.use("/comment", commentsRoutes)

app.get("*", (req, res) => res.sendStatus(404))

export default app
