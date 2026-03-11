

import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksTable = ({ books }) => {
  return (

    <div className="bg-white shadow-xl rounded-2xl overflow-hidden">

      <table className="w-full text-left">

        <thead className="bg-sky-600 text-white">
          <tr>
            <th className="px-6 py-3">No</th>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3 max-md:hidden">Author</th>
            <th className="px-6 py-3 max-md:hidden">Publish Year</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {books.map((book, index) => (
            <tr
              key={book._id}
              className="border-b hover:bg-sky-50 transition duration-200"
            >

              <td className="px-6 py-4 font-medium text-gray-700">
                {index + 1}
              </td>

              <td className="px-6 py-4 font-semibold text-gray-800">
                {book.title}
              </td>

              <td className="px-6 py-4 text-gray-600 max-md:hidden">
                {book.author}
              </td>

              <td className="px-6 py-4 text-gray-600 max-md:hidden">
                {book.publishYear}
              </td>

              <td className="px-6 py-4">

                <div className="flex justify-center gap-4">

                  <Link to={`/books/details/${book._id}`}>
                    <div className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition">
                      <BsInfoCircle className="text-xl text-green-700" />
                    </div>
                  </Link>

                  <Link to={`/books/edit/${book._id}`}>
                    <div className="p-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition">
                      <AiOutlineEdit className="text-xl text-yellow-700" />
                    </div>
                  </Link>

                  <Link to={`/books/delete/${book._id}`}>
                    <div className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition">
                      <MdOutlineDelete className="text-xl text-red-700" />
                    </div>
                  </Link>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )
}

export default BooksTable