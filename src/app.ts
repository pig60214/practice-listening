import express, { Express, Router } from "express";
import cors from "cors";
import apis from './apis';

const app: Express = express();
app.use(express.json());
app.use(cors());

const router = Router();
router.get('/getTranscriptions', apis.getTranscriptions);

app.use("/", router);

export default app;
