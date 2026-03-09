// import axios from "axios";
// import { useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import BackButton from "../components/BackButton";
// import Spinner from "../components/Spinner";
// import { useSnackbar } from "notistack";


// const DeleteBook = () => {
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const{enqueSnackbar}=useSnackbar();
//   const handleDeleteBook = () => {
//     setLoading(false);
//     axios
//       .delete(`http://localhost:5555/books/${id}`)
//       .then(() => {
//         setLoading(false);
//          enqueSnackbar('Book Deleted Successfully', {variant:'success'})
//         navigate('/');
//       })
//       .catch((error) => {
//         setLoading(false);
//         // alert('An error happened.Please check console')

//         console.log(error);
//       })
//   };





//   return (
//     <div className="p-4">
//       <BackButton />
//       <h1 className="text-3xl my-4">DeleteBook</h1>
//       {loading ? <Spinner /> :''}
//       <div className="flex flex-col items-center border-2 border-sky-500  rounded-xl w-[600px] p-8 mx-auto">

// <h3 className="text-2xl">Are you Sure You wnt to Delete this Book ?</h3>
// <button className="p-4 bg-red-400 text-white m-8 w-full" onClick={handleDeleteBook}>
// Yes, Delete it
// </button>
//       </div>
//     </div>
//   )
// }

// export default DeleteBook
import axios from "axios";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const DeleteBook = () => {

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {

    setLoading(true);

    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {

        setLoading(false);

        enqueueSnackbar('Book Deleted Successfully', { variant: 'success' })

        navigate('/');

      })
      .catch((error) => {

        setLoading(false);

        enqueueSnackbar('Error deleting book', { variant: 'error' })

        console.log(error);

      })

  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <BackButton />

      <h1 className="text-4xl font-bold text-center text-gray-800 my-6">
        Delete Book
      </h1>

      {loading ? <Spinner /> : ''}

      <div className="flex flex-col items-center bg-white shadow-xl rounded-2xl w-[500px] p-8 mx-auto">

        <h3 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Are you sure you want to delete this book?
        </h3>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg w-full transition duration-300 shadow-md"
          onClick={handleDeleteBook}
        >
          Yes, Delete Book
        </button>

      </div>

    </div>
  )
}

export default DeleteBook