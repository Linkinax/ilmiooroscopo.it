const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlDbFactory = require("knex");
const process = require("process");

const rp = require('request-promise');
const cheerio = require('cheerio');
const _ = require("lodash");


const options = {
  uri: `https://oroscopo.sky.it/oroscopo/giorno/leone.html`,
  transform: function (body) {
    return cheerio.load(body);
  }
};


rp(options)
  .then(($) => {
    console.log($('.c-multi-tab__tab-body.j-tabs-tab0.is-active').text());
  })
  .catch((err) => {
    console.log(err);
  });


let serverPort = process.env.PORT || 5000;

app.use(express.static(__dirname + "/startbootstrap-clean-blog-gh-pages"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// /* Register REST entry point */

app.get("/oroscopoOdierno/:params", function(req, res) {
  console.log(req.query.name);
  console.log(Object.keys(req.query)[0]);

});

// app.use(function(req, res) {
//   res.status(400);
//   res.send({ error: "400", title: "404: File Not Found" });
// });

app.set("port", serverPort);


/* Start the server on port 3000 */
app.listen(serverPort, function() {
  console.log(`Your app is ready at port ${serverPort}`);
});
