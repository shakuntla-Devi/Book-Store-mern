
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const API_URL = import.meta.env.VITE_API_URL;


const EditBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${API_URL}/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error loading book', { variant: 'error' })
        console.log(error);
      })

  }, [])

  const handleEditBook = () => {

    const data = {
      title,
      author,
      publishYear
    };

    setLoading(true);

    axios
      .put(`${import.meta.env.VITE_API_URL}/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited Successfully', { variant: 'success' })
        navigate('/')
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error updating book', { variant: 'error' })
        console.log(error);
      })

  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <BackButton />

      <h1 className="text-4xl font-bold text-center text-gray-800 my-6">
        Edit Book
      </h1>

      {loading ? <Spinner /> : ''}

      <div className="flex flex-col bg-white shadow-xl rounded-2xl w-[500px] p-8 mx-auto">

        <div className="mb-5">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div className="mb-5">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Author
          </label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Publish Year
          </label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <button
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          onClick={handleEditBook}
        >
          Update Book
        </button>

      </div>

    </div>
  )
}

export default EditBook;