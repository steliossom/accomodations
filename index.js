import express from "express"
import { fileURLToPath } from 'url';
import {dirname} from "path"
import queries from "./queries/queries.js"



const app =express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(__dirname))


app.use("/erotimata",queries)


export default app