import express from "express";
import bodyParser from "body-parser";

const app = express();

const PORT = 5000;
app.use(bodyParser.json());

app.get('/', (req, res) => 
{console.log("test");
res.send("hello from server");}
)


app.listen(PORT, () => console.log(`server is runing on port http://localhost:${PORT} `));