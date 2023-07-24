import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useCurrentUserContext } from "../contexts/CurrentUserContext"

function ShowPost() {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)

  const { id } = useParams()

  const { user } = useCurrentUserContext()

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/post/${id}/comment`)
      .then((res) => res.json())
      .then(([postData, commentsData]) => {
        setPost(postData)
        setComments(commentsData)
      })
  }, [id])

  const handleDelete = () => {
    const confirmation = window.confirm("Are you sure ?")

    if (confirmation) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/post/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.status === 204) {
          return navigate("/")
        }

        alert("Bad Request")
      })
    }
  }

  return (
    <>
      {post && (
        <div className="flex flex-col min-h-full">
          <div className="flex flex-col bg-slate-800 p-16 mt-4">
            <h1 className="text-3xl text-center text-white">{post.title}</h1>
            <span className="text-center text-sm text-slate-400">
              Le {new Date(post.creation_date).toLocaleDateString()} à{" "}
              {new Date(post.creation_date).toLocaleTimeString()}
            </span>
          </div>
          <div className="w-4/5 xl:w-2/4 bg-white rounded mx-auto my-16 flex flex-col p-8 h-fit min-h-12">
            <p>{post.content}</p>
            <p className="text-sm text-slate-600 text-end m-4">
              By : <span>{post.firstname}</span>
            </p>
            {user && (
              <div className="flex flex-row gap-4 justify-center">
                <Link
                  className="bg-slate-800 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-slate-500 transition-all duration-300"
                  to={`/edit-post/${id}`}
                >
                  <h2>Editer l&apos;article</h2>
                </Link>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-red-400 transition-all duration-300"
                >
                  Supprimer
                </button>
              </div>
            )}
          </div>
          {comments.length && (
            <>
              <h2 className="text-slate-800 text-xl text-center mb-8">
                Commentaires
              </h2>
              <div className="w-4/5 xl:w-2/4 bg-white rounded mx-auto my-8 flex flex-col p-4 h-fit min-h-12">
                {comments.map((comment) => (
                  <article
                    key={comment.id}
                    className="w-4/5 xl:w-2/4 bg-slate-100 rounded mx-auto my-4 flex flex-col p-4 border borde-slate-800"
                  >
                    <p>{comment.content}</p>
                    <p className="text-end">
                      By: <span>{comment.firstname}</span>
                    </p>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default ShowPost
