import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use( bodyParser.json({ limit: "30mb", extended: true }));
app.use( bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const URL="mongodb+srv://rishabhsareen:inazuma11@cluster0.ownp3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=5000;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
 .then( () => app.listen(PORT, () => console.log(`connected on port number ${PORT}`)) )
 .catch((error) => console.log(`could not connect error: ${error}`));


 mongoose.set('useFindAndModify', false); 
