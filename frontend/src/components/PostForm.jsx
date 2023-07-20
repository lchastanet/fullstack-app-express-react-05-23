import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

function PostForm({ modCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!modCreate) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/post/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
        });
    }
  }, [id, modCreate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length > 3 && content.length > 10) {
      const data = { title, content };

      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/post${modCreate ? "" : "/" + id}`,
        {
          method: modCreate ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      ).then((res) => {
        if (res.status === 201) {
          return navigate("/");
        }

        if (res.status === 200) {
          return navigate(`/show-post/${id}`);
        }

        alert("Bad Request");
      });
    } else {
      alert("Fields canno't be null");
    }
  };

  return (
    <>
      <form
        className="flex flex-col bg-white p-4 w-4/5 xl:w-2/4 mx-auto gap-y-4 my-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          id="title"
          className="bg-slate-100 p-2"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          className="bg-slate-100 p-2"
          placeholder="Contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          className="bg-slate-800 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-slate-500 transition-all duration-300 w-fit mx-auto"
          type="submit"
          value={modCreate ? "Ajouter" : "Modifier"}
        />
      </form>
    </>
  );
}

export default PostForm;
