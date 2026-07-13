import cookieParser from "cookie-parser";
import express, { type Application, type Request, type Response } from "express";
import cors from "cors"
import config from "./config";

const app: Application = express();

// Middleware
app.use(cors({
    origin: config.app_url,
    credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Testing Route
app.get("/", (req: Request, res: Response) => {
    res.json("Backend Server is Running!!")
})

export default app;