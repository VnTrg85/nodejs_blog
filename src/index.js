import express from "express";
import { engine } from "express-handlebars";
import * as path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import { route } from "./routes/index.js";
import * as db from "./config/db/index.js";

// Connect db
db.connect();

//GET dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

//Use static files
app.use(express.static(path.join(__dirname, "public")));

// MORGAN HTPP LOGGER
// app.use(morgan('combined'))
//Handle DATA Form(Body)

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//With handlebars(file html)
app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", "./src/resources/views");

route(app);

app.listen(3000);
