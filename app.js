import express from "express"
import bodyParser from "body-parser"
import session from "express-session"
import path from "path"
import { fileURLToPath } from "url"


const app = express();

app.use(session({
  secret: 'studybuddysecret',
  resave: false,
  saveUninitialized: false
}));

//set ejs as view engine
app.set('view engine', 'ejs');

//views path folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view', path.join(__dirname, 'views'));

//static files 
app.use(express.static(path.join(__dirname,'public')));


//route to render dashboard
app.get('/',(req,res)=>{
    res.render('home');
});



//start server

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
