import express from "express";
import { PORT } from "./Config.js";
import { ConnectDB } from "./Database/ConnectDB.js";
import booksRoute from './routes/booksRoute.js';
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app = express()

app.use(cors())
// app.use(cors({
// origin:'http://localhost:5173',
// methods:['GET','POST','PUT','DELETE'],
// allowedHeaders:['Content-Type'],


// }))
 app.use(express.json());


 app.get('/', (req, res) => {
     console.log(req)
     return res.status(200).send("Welcome to mern Stack Tutorial")
     
    })
    app.use('/books', booksRoute)

// app.listen(PORT, () => {
//     console.log("Welcome to mern Stack Tutorial")
// })
app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
ConnectDB();
// sd2511825_db_user
// T5LwgjPl5r3dZJjn
// mongodb+srv://sd2511825_db_user:T5LwgjPl5r3dZJjn@cluster0.6jrk1gd.mongodb.net/?appName=Cluster0