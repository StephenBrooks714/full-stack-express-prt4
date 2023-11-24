const express = require("express");
const app = express();
const sitemapGenerator = require("sitemap-generator");
const compression = require("compression");
const {http} = require("follow-redirects");
const router = require("./server/router/routes");
const path = require('path')

http.get('http://localhost:8080/', response => {
    response.on('data', chunk => {
        console.log(chunk)
    })
})
// https.get('https://localhost:8080/', response => {
//     response.on('data', chunk => {
//         console.log(chunk)
//     })
// })

const generator = sitemapGenerator("http://localhost:8080/", {
    stripQueryString: false
})
generator.on('done', () => {
    //sitemap created
})
generator.start();

require("dotenv").config();

app.use(compression());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,('public'))));

const port = process.env.PORT;
app.listen(port || 8000, () => {
    console.log(`App is listening on port ${port}`)
});

app.use("/", router);

app.use(function(req, res, next){
    res.status(404).render('notFound.ejs', {title: "Sorry, page not found"});
});