import express from 'express';
import Logger from "./lib/logger";

const app = express();
const PORT = 3000;

import indexRoutes from './routes/index'

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);


app.listen(PORT, () => {
    Logger.debug(`Server is up and running @ http://localhost:${PORT}`);
});