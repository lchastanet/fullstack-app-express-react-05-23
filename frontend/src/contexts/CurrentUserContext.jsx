import { createContext, useContext, useState } from "react"

const CurrentUserContext = createContext()

export const useCurrentUserContext = () => useContext(CurrentUserContext)

export const CurrentUserContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  console.log(user)

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
