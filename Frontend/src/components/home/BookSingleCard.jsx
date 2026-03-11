
import { useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { BiShow, BiUserCircle } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"
import { PiBookOpenTextLight } from "react-icons/pi"
import { Link } from "react-router-dom"
import BookModal from "./BookModal"

const BookSingleCard = ({ book }) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-5 relative hover:shadow-2xl hover:scale-105 transition duration-300">

        {/* Publish Year */}
        <span className="absolute top-3 right-3 bg-sky-500 text-white text-sm px-3 py-1 rounded-lg">
          {book.publishYear}
        </span>

        {/* Book ID */}
        <p className="text-xs text-gray-400 mb-2">
          {book._id}
        </p>

        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <PiBookOpenTextLight className="text-sky-500 text-2xl" />
          <h2 className="text-lg font-semibold text-gray-800">
            {book.title}
          </h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mb-4">
          <BiUserCircle className="text-sky-500 text-2xl" />
          <p className="text-gray-600">
            {book.author}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">

          <BiShow
            className="text-3xl text-blue-600 hover:text-black cursor-pointer transition"
            onClick={() => setShowModal(true)}
          />

          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className="text-2xl text-green-600 hover:text-black transition" />
          </Link>

          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-black transition" />
          </Link>

          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="text-2xl text-red-500 hover:text-black transition" />
          </Link>

        </div>

      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </>
  )
}

export default BookSingleCard