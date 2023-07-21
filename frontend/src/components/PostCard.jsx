import { Link } from "react-router-dom";

function PostCard({ post }) {
  const { id, title, content, creation_date } = post;

  return (
    <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
      <span className="font-light text-gray-600">
        {new Date(creation_date).toLocaleString()}
      </span>
      <div className="mt-2">
        <span className="text-2xl text-gray-700 font-bold hover:underline">
          {title}
        </span>
        <p className="mt-2 text-gray-600">{content}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link
          className="bg-slate-600 text-white font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-slate-500 transition-all duration-300"
          to={`/show-post/${id}`}
        >
          <h2>Voir l&apos;article</h2>
        </Link>
        <div className="flex flex-row">
          <img
            src="http://picsum.photos/200/300"
            alt="avatar"
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          />
          <p className="text-gray-700 font-bold my-auto hover:underline">
            Auteur
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
