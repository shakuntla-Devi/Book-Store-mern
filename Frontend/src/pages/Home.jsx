
import { useEffect, useState } from "react"
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table');

  // env variable
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${API_URL}/books`)
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })

  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Books List
          </h1>

          <Link to='/books/create'>
            <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg shadow-md transition">
              <MdOutlineAddBox className="text-2xl" />
              Add Book
            </button>
          </Link>

        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-6">

          <button
            className={`px-5 py-2 rounded-lg font-medium shadow 
            ${showType === 'table'
                ? 'bg-sky-500 text-white'
                : 'bg-white border hover:bg-gray-100'
              }`}
            onClick={() => setShowType('table')}
          >
            Table View
          </button>

          <button
            className={`px-5 py-2 rounded-lg font-medium shadow 
            ${showType === 'card'
                ? 'bg-sky-500 text-white'
                : 'bg-white border hover:bg-gray-100'
              }`}
            onClick={() => setShowType('card')}
          >
            Card View
          </button>

        </div>

        {/* Data */}
        {
          loading ? (
            <Spinner />
          ) : showType === 'table'
            ? (<BooksTable books={books} />)
            : (<BooksCard books={books} />)
        }

      </div>

    </div>
  )
}

export default Home
