import Express from "express";

const app = Express();
const port = 3050;

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.listen(port);
