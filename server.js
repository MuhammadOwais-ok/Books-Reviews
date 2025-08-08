const express = require ("express")
const app = express()
require("dotenv").config()
const connectDB = require("./db/connectDB")
const PORT = process.env.PORT  || 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/auth",require("./routes/auth.routes"))
app.use("/book",require("./routes/book.routes"))
app.use("/admin",require("./routes/admin.routes"))
app.use("/review",require("./routes/review.routes"))



connectDB()

app.listen(PORT , ()=>{
    console.log(`SERVER IS RUNNING AT ${PORT}`);
})


