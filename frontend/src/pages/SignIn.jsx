import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCurrentUserContext } from "../contexts/CurrentUserContext"
import expressAPI from "../services/expressAPI"

function SignIn() {
  const [fields, setFields] = useState({ email: "", password: "" })

  const { setUser } = useCurrentUserContext()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (fields.email.length && fields.password.length) {
      expressAPI
        .post("/auth/sign-in", fields)
        .then((res) => {
          if (res.status === 200) {
            console.log(res)
            return res
          } else {
            alert("Identifiants incorrects")
          }
        })
        .then((res) => {
          setUser(res.data)
          localStorage.setItem("user", JSON.stringify(res.data))
          navigate("/")
        })
    } else {
      alert("Veuillez remplir les champs correctement")
    }
  }

  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-4/5 md:h-full lg:w-2/5">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Connexion
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={fields.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                value={fields.password}
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-primary-800"
            >
              Se connecter
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Pas de compte?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                S&apos;inscrire
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn
