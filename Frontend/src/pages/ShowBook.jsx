// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import BackButton from "../components/BackButton";
// import Spinner from "../components/Spinner";

// const ShowBook = () => {

//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(false)
//   const { id } = useParams();

//   useEffect(() => {
//     setLoading(true);


//     axios
//       .get(`http://localhost:5555/books/${id}`)
//       .then((res) => {
//         setBook(res.data);
//         setLoading(false);

//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       })
//   }, [])

//   return (
//     <div className="p-4">


//       <BackButton />
//       <h1 className="text-3xl my-4">Show Book</h1>
//       {
//         loading ? (
//           <Spinner />
//         ) : (
//           <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
//             <div className="my-4">
//               <span className="text-xl mr-4 text-gray-500">Id</span>
//               <span>{book._id}</span>
//             </div>
//             <div className="my-4">
//               <span className="text-xl mr-4 text-gray-500">Title</span>
//               <span>{book._title}</span>

//             </div>
//             <div className="my-4">
//               <span className="text-xl mr-4 text-gray-500">Author</span>
//               <span>{book._author}</span>
//             </div>
//             <div className="my-4" >
//               <span className="text-xl mr-4 text-gray-500">PublishYear</span>
//               <span>{book._publishYear}</span>

//             </div>
//             <div className="my-4">
//               <span className="text-xl mr-4 text-gray-500">Create Time</span>
//               <span>{new Date(book.createdAt).toString()}</span>

//             </div>
//             <div className="my-4">
//               <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
//               <span>{new Date(book.updatedAt).toString()}</span>

//             </div>

//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default ShowBook;
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
      .get(`http://localhost:5555/books/${id}`)
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