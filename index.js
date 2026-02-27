const express = require("express");
const app = express()
const path = require("node:path")

app.use(express.urlencoded({extended: true}))

const indexRouter = require("./routes/indexrouter");
app.use("/", indexRouter)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))


const PORT = 3000
app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log(`Mini Message Board - Assignment - listening on port ${PORT}!`)
})
