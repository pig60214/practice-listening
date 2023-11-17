import express, { Express, Router } from "express";
import cors from "cors";
import apis from './apis';

const app: Express = express();
app.use(express.json());
app.use(cors());

const router = Router();
router.get('/getTranscriptions', apis.getTranscriptions);

app.use("/api/", router);

export default app;
