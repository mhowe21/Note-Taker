let express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const HTML = require("./Routes/HTML/HTMLRout");
const API = require("./Routes/API/APIRout");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", API);
app.use("/", HTML);

app.listen(PORT, () => {
  console.log(`API server is on port ${PORT}`);
});
