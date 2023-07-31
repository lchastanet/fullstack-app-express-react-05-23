import { useEffect, useState } from "react"
import axios from "axios"

import PostCard from "../components/PostCard"
import { Link } from "react-router-dom"

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/post`)
      .then((res) => setPosts(res.data))
  }, [])

  return (
    <>
      <div className="flex flex-row justify-center gap-8 bg-white my-12 dark:text-white dark:bg-slate-800">
        <div className="flex flex-col my-auto gap-4">
          <h2 className="text-2xl">
            Bienvenue sur &nbsp;
            <span className="text-3xl font-bold my-auto dark:text-white">
              PostMeh_
            </span>
          </h2>
          <p className="text-sm">
            Ici, vous pouvez créer des posts, les modifier, les supprimer et les
            voir !
            <br />
            Oui je sais, je ne suis inspiré.
          </p>
          <Link
            className="bg-slate-600 text-white w-fit mx-auto mt-4 font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-slate-500 transition-all duration-300"
            to={`/create-post`}
          >
            <h2>Créer un article</h2>
          </Link>
        </div>
        <img
          className="w-96 my-8"
          src="https://image.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg"
        />
      </div>
      <div className="bg-slate-800 p-16 mt-4 shadow">
        <h1 className="text-3xl text-center text-white">Liste des posts</h1>
      </div>
      <article className="flex flex-col flex-wrap w-4/5 xl:w-2/4 mx-auto my-12 gap-y-4">
        {posts.length > 0 &&
          posts.map((post) => <PostCard key={post.id} post={post} />)}
      </article>
    </>
  )
}

export default Home
