// import { AiOutlineClose } from "react-icons/ai"
// import { BiUserCircle } from "react-icons/bi"
// import { PiBookOpenTextLight } from "react-icons/pi"


// const BookModal = (book, onClose) => {
//     return (
//         <div className="fixed bg-black  bg-opacity-60 top-0 left-0 right-0  bottom-0 z-50 flex justify-center items-center"
//             onClick={onClose}

//         >
//             <div onClick={(event) => event.stopPropagation()}
//                 className="w-[600px] max-w-full h-[400px] bg-white rounded-xl  p-4 flex flex-col relative"


//             ><AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
//                 onClick={onClose}
//                 />
//                 <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">{book.publishYear}</h2>
//                 <h4 className="my-2 text-gray-500">{book._id}</h4>
//                 <div className="flex justify-start items-center gap-x-2"><PiBookOpenTextLight className="text-red-300 text-2xl" />
//                     <h2 className="my-1">{book.title}</h2>
//                 </div>
//                 <div className="flex justify-start items-center gap-x-2"><BiUserCircle className="text-red-300 text-2xl" />
//                     <h2 className="my-1">{book.author}</h2>
//                 </div>
//                 <p className="mt-4">Anything you want to Show</p>
//                 <p className="my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                     Quasi dolorem quia ipsum, minus eaque eligendi eum perspiciatis? Beatae aspernatur culpa
//                     perspiciatis omnis quidem itaque esse, optio fugit maiores expedita possimus numquam eligendi
//                     ipsam labore, laborum quia harum veritatis repellendus nobis a cumque delectus voluptatum. Asperiores quis
//                     totam officia sequi repellat hic adipisci sunt sit amet voluptatem quasi quos earum, quaerat maiores debitis optio non
//                     minus necessitatibus autem ipsa dignissimos ducimus perspiciatis excepturi. Veniam molestias accusantium rerum cumque iusto dolorem voluptatum laborum iure vero! Mollitia perferendis, in fugit itaque deserunt unde, dolore, tempore
//                     libero reiciendis culpa a corporis praesentium commodi accusantium?</p>

//             </div>


//         </div>
//     )
// }

// export default BookModal
import { AiOutlineClose } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { PiBookOpenTextLight } from "react-icons/pi"

const BookModal = ({ book, onClose }) => {

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >

      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[500px] max-w-full bg-white rounded-2xl shadow-xl p-6 relative"
      >

        {/* Close Button */}
        <AiOutlineClose
          className="absolute right-5 top-5 text-3xl text-red-500 cursor-pointer hover:text-red-700"
          onClick={onClose}
        />

        {/* Publish Year */}
        <span className="bg-sky-500 text-white px-3 py-1 rounded-lg text-sm">
          {book.publishYear}
        </span>

        {/* Book ID */}
        <p className="text-gray-400 text-sm mt-2">
          {book._id}
        </p>

        {/* Title */}
        <div className="flex items-center gap-2 mt-4">
          <PiBookOpenTextLight className="text-sky-500 text-2xl" />
          <h2 className="text-xl font-semibold text-gray-800">
            {book.title}
          </h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mt-2">
          <BiUserCircle className="text-sky-500 text-2xl" />
          <p className="text-gray-600">
            {book.author}
          </p>
        </div>

        {/* Extra Text */}
        <p className="mt-6 text-gray-600 text-sm leading-relaxed">
          This modal shows quick information about the selected book.
          You can use this section to display description, category,
          or any extra details about the book.
        </p>

      </div>

    </div>
  )
}

export default BookModal