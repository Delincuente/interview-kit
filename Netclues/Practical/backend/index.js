import express from "express";

import errorHandler, { notFound } from "./middlewares/errorHandler.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});