
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${API_URL}/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <BackButton />

      <h1 className="text-4xl font-bold text-center text-gray-800 my-6">
        Book Details
      </h1>

      {
        loading ? (
          <Spinner />
        ) : (
          <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8">

            <div className="mb-4">
              <span className="font-semibold text-gray-600">ID:</span>
              <p className="text-gray-800">{book._id}</p>
            </div>

            <div className="mb-4">
              <span className="font-semibold text-gray-600">Title:</span>
              <p className="text-gray-800">{book.title}</p>
            </div>

            <div className="mb-4">
              <span className="font-semibold text-gray-600">Author:</span>
              <p className="text-gray-800">{book.author}</p>
            </div>

            <div className="mb-4">
              <span className="font-semibold text-gray-600">Publish Year:</span>
              <p className="text-gray-800">{book.publishYear}</p>
            </div>

            <div className="mb-4">
              <span className="font-semibold text-gray-600">Created At:</span>
              <p className="text-gray-800">
                {book.createdAt ? new Date(book.createdAt).toLocaleString() : ""}
              </p>
            </div>

            <div>
              <span className="font-semibold text-gray-600">Last Updated:</span>
              <p className="text-gray-800">
                {book.updatedAt ? new Date(book.updatedAt).toLocaleString() : ""}
              </p>
            </div>

          </div>
        )
      }

    </div>
  )
}

export default ShowBook;
