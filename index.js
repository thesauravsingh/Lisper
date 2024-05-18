
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
const URL = "https://secrets-api.appbrewery.com/random"

app.get("/",async (req,res) => {
    const result = await axios.get(URL);
    const user = result.data.username;
    const secret = result.data.secret;
    try{
        res.render("index.ejs", {user:user, secret:secret, });
    }
    catch(error){
        res.status(404).send("failed");
    }
})



app.listen(port, () => {
    console.log(`listening on port${3000}`);
})


