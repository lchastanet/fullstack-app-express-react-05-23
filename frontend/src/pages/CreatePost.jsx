import PostForm from "../components/PostForm";

function CreatePost() {
  return (
    <>
      <div className="bg-slate-800 p-16 mt-4">
        <h1 className="text-3xl text-center text-white">Ajouter un post</h1>
      </div>
      <PostForm modCreate />
    </>
  );
}

export default CreatePost;
