// Package imports
import express, {Application} from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import 'dotenv/config'

// Local Imports
import todaysMatchesRouter from './routes/todaysMatches';



const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use('/', todaysMatchesRouter);

app.listen(PORT,() => {
  console.log(`Server running on port http://localhost:${PORT}`)
});