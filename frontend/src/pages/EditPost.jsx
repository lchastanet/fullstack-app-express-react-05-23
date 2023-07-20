import PostForm from "../components/PostForm";
import { useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();

  return (
    <>
      <div className="bg-slate-800 p-16 mt-4">
        <h1 className="text-3xl text-center text-white">
          Modifier le post N°{id}
        </h1>
      </div>
      <PostForm />
    </>
  );
}

export default EditPost;
