import  express from 'express'
import  mongoose from 'mongoose'
import routes from './routes'
const bodyParser=require('body-parser')

const cors=require('cors')




const app= express();
const port=3000;

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); 

const dbUrl = 'mongodb://localhost:27017/foodapp';
const dbOptions: mongoose.ConnectionOptions = Object.assign({ useNewUrlParser: true });

const connectDb = ():Promise<typeof mongoose> => {
    return mongoose.connect(dbUrl, dbOptions).then((mongoDB: typeof mongoose) => {
        console.info(`Connected to database.`);
        return mongoDB;
    }).catch((err: any) => {
        console.error(`Unable to connect to db.`);
        throw err;
    });
}

connectDb();



// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
// });

