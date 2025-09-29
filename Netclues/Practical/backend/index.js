import express from "express";

import route from "./routes/index.js";
import errorHandler, { notFound } from "./middlewares/errorHandler.js";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use((req, res, next) => {
    console.log(new Date(), req.method, req.url);
});
app.use('/',route);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});