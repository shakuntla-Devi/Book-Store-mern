// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";
// import { Link } from "react-router-dom";


// const BooksTable = ({books}) => {
//   return (
   
//    <>
   
//    <table className="w-full border-separate border-spacing-2">
//               <thead>
//                 <tr>

//                   <th className="border border-slate-600 rounded-md">No</th>
//                   <th className="border border-slate-600 rounded-md">Title</th>
//                   <th className="border border-slate-600  rounded-md max-md:hidden">Author</th>
//                   <th className="border border-slate-600  rounded-md max-md:hidden">PublishYear</th>
//                   <th className="border border-slate-600 rounded-md">Operations </th>
//                 </tr>


//               </thead>
//               <tbody>
//                 {
//                   books.map((book, index) => {
// return(
//                     <tr key={book._id} className="h-8">
//                       <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
//                       <td className="border border-slate-700 rounded-md text-center"> {book.title}</td>
//                       <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.author}</td>
//                       <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
//                       <td className="border border-slate-700 rounded-md text-center">
//                         <div className="flex justify-center gap-x-4">
//                           <Link to={`/books/details/${book._id}`}>
//                             <BsInfoCircle className="text-2xl text-green-800" />
//                           </Link>
//                           <Link to={`/books/edit/${book._id}`}>
//                             <AiOutlineEdit className="text-2xl text-yellow-600" />

//                           </Link>
//                           <Link to={`/books/delete/${book._id}`}>
//                             <MdOutlineDelete className="text-2xl text-red-600" />


//                           </Link>


//                         </div>


//                       </td>


//                     </tr>
// );
//                   })}


//               </tbody>




//             </table>
   
//    </>
//   )
// }

// export default BooksTable
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";
// import { Link } from "react-router-dom";

// const BooksTable = ({ books }) => {
//   return (

//     <div className="bg-white shadow-lg rounded-xl p-4 overflow-x-auto">

//       <table className="w-full border-collapse">

//         <thead>
//           <tr className="bg-sky-500 text-white">

//             <th className="py-3 px-4 text-left">No</th>
//             <th className="py-3 px-4 text-left">Title</th>
//             <th className="py-3 px-4 text-left max-md:hidden">Author</th>
//             <th className="py-3 px-4 text-left max-md:hidden">Publish Year</th>
//             <th className="py-3 px-4 text-center">Actions</th>

//           </tr>
//         </thead>

//         <tbody>

//           {books.map((book, index) => (
//             <tr
//               key={book._id}
//               className="border-b hover:bg-gray-100 transition"
//             >

//               <td className="py-3 px-4">{index + 1}</td>

//               <td className="py-3 px-4 font-medium">
//                 {book.title}
//               </td>

//               <td className="py-3 px-4 max-md:hidden">
//                 {book.author}
//               </td>

//               <td className="py-3 px-4 max-md:hidden">
//                 {book.publishYear}
//               </td>

//               <td className="py-3 px-4">
//                 <div className="flex justify-center gap-4">

//                   <Link to={`/books/details/${book._id}`}>
//                     <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition" />
//                   </Link>

//                   <Link to={`/books/edit/${book._id}`}>
//                     <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition" />
//                   </Link>

//                   <Link to={`/books/delete/${book._id}`}>
//                     <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-700 transition" />
//                   </Link>

//                 </div>
//               </td>

//             </tr>
//           ))}

//         </tbody>

//       </table>

//     </div>

//   )
// }

// export default BooksTable
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";
// import { Link } from "react-router-dom";

// const BooksTable = ({ books }) => {
//   return (
//     <div className="bg-white shadow-xl rounded-2xl p-6 overflow-x-auto">

//       <table className="w-full text-left border-collapse">

//         {/* Header */}
//         <thead>
//           <tr className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm uppercase tracking-wider">

//             <th className="py-4 px-6">No</th>
//             <th className="py-4 px-6">Title</th>
//             <th className="py-4 px-6 max-md:hidden">Author</th>
//             <th className="py-4 px-6 max-md:hidden">Publish Year</th>
//             <th className="py-4 px-6 text-center">Actions</th>

//           </tr>
//         </thead>

//         {/* Body */}
//         <tbody>

//           {books.map((book, index) => (
//             <tr
//               key={book._id}
//               className="border-b hover:bg-gray-50 transition duration-200"
//             >

//               <td className="py-4 px-6 text-gray-700">
//                 {index + 1}
//               </td>

//               <td className="py-4 px-6 font-semibold text-gray-800">
//                 {book.title}
//               </td>

//               <td className="py-4 px-6 text-gray-600 max-md:hidden">
//                 {book.author}
//               </td>

//               <td className="py-4 px-6 text-gray-600 max-md:hidden">
//                 {book.publishYear}
//               </td>

//               <td className="py-4 px-6">
//                 <div className="flex justify-center gap-4">

//                   <Link
//                     to={`/books/details/${book._id}`}
//                     className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition"
//                   >
//                     <BsInfoCircle className="text-xl text-green-600" />
//                   </Link>

//                   <Link
//                     to={`/books/edit/${book._id}`}
//                     className="p-2 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition"
//                   >
//                     <AiOutlineEdit className="text-xl text-yellow-600" />
//                   </Link>

//                   <Link
//                     to={`/books/delete/${book._id}`}
//                     className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition"
//                   >
//                     <MdOutlineDelete className="text-xl text-red-600" />
//                   </Link>

//                 </div>
//               </td>

//             </tr>
//           ))}

//         </tbody>

//       </table>

//     </div>
//   )
// }

// export default BooksTable
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