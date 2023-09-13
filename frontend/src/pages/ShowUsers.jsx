import { useEffect, useState } from "react"
import expressAPI from "../services/expressAPI.js"

function ShowUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    expressAPI.get("/user").then((res) => setUsers(res.data))
  }, [])

  return (
    <div>
      {Boolean(users.length) &&
        users.map((user) => <p key={user.id}>{user.firstname}</p>)}
    </div>
  )
}

export default ShowUsers
