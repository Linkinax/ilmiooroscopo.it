const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlDbFactory = require("knex");
const process = require("process");
const path = require('path');
const rp = require('request-promise');
const cheerio = require('cheerio');
const _ = require("lodash");




let serverPort = process.env.PORT || 5000;

app.use(express.static(__dirname + "/startbootstrap-clean-blog-gh-pages"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// /* Register REST entry point */

app.get('/sitemap.xml', function(req, res){
    res.contentType('application/xml');
    res.sendFile(path.join(__dirname , '/sitemap.xml'));
});
app.get('/robots.txt', function(req, res){
    res.contentType('txt');
    res.sendFile(path.join(__dirname , '/robots.txt'));
});
app.get('/xd.JPEG', function(req, res){
    res.contentType('JPEG');
    res.sendFile(path.join(__dirname , '/xd.JPEG'));
});

app.get("/oroscopoOdierno/:id", function(req, res) {
  var ID = req.params.id;
  //Storing data:
    myObj = {};
    myJSON = JSON.stringify(myObj);

  const options = {
    uri: "https://oroscopo.sky.it/oroscopo/giorno/"+ ID+".html",
    transform: function (body) {
      return cheerio.load(body);
    }
  };
  rp(options)
    .then(($) => {
      var megaDiv= $('.c-multi-tab__tab-body.j-tabs-tab0.is-active');
      console.log(megaDiv.html());

      myObj["Data"]= ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > p:first-child \n\n").text());
      myObj["Segno"]= ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > b").text());
      myObj["Generale"] = ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > p \n\n").eq(1).text());
      myObj["Amore"] = ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > p \n\n").eq(2).text());
      myObj["Lavoro"] = ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > p \n\n").eq(3).text());

      res.send(myObj);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/oroscopoSettimanale/:id", function(req, res) {
  var ID = req.params.id;
  //Storing data:
    myObj = {};
    myJSON = JSON.stringify(myObj);

  const options = {
    uri: "https://oroscopo.sky.it/oroscopo/settimana/"+ ID+".html",
    transform: function (body) {
          return cheerio.load(body);
        }
      };
      rp(options)
          .then(($) => {

            var megaDiv= $('.c-multi-tab__tab-body.j-tabs-tab0.is-active');

            console.log(megaDiv.html());

            myObj["Data"]= ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > p:first-child \n\n").text());
            myObj["Segno"]= ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > b").text());
            myObj["Generale"] = ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > p \n\n").eq(1).text());
            myObj["Amore"] = ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > p \n\n").eq(2).text());
            myObj["Lavoro"] = ($(".c-multi-tab__tab-body.j-tabs-tab0.is-active > p \n\n").eq(3).text());

            res.send(myObj);
          })
          .catch((err) => {
            console.log(err);
          });
      });

      app.get("/affiliateMarketing/:params", function(req, res) {
        var ID =  req.params.id;
        var link = req.query.link;
        console.log(link);
        //Storing data:
          myObj = {};
          myJSON = JSON.stringify(myObj);
          myObj["posts"] = [];

          var tumblr = require('tumblr.js');

          var clientMemes = tumblr.createClient({
              consumer_key: 'gn1tWsZ5Wq3tyOdZbKoOLHrUhlYwAnXqDjEeLRtwjGuCu1LKh2',
              consumer_secret: 'vcIKu8qrHl8uguTgjkbGuwaQiVDajMfY3zi1u7AJXcUzlDVxiU',
              token: 'dC00e6YQxlwWT37Lm8A8ZIx1VpwHoVcTbCAHlinpptluI6R8YT',
              token_secret: '6gMoqbosWaQCfK1c56CPvCNmMyyFtZkZjKrDuUDNig4Bd10Vsw'
              });
        const options = {
          uri: link,
          transform: function (body) {
            return cheerio.load(body);
          }
        };
        rp(options)
          .then(($) => {


            var reblogBtn= $('.control.reblog-control');
            var dembtns = [
              "https://www.tumblr.com/reblog/176943541602/cOMlIxNj",
  "https://www.tumblr.com/reblog/176943510312/t2KIVLTI",
  "https://www.tumblr.com/reblog/176943509192/mEEhr7PI",
  "https://www.tumblr.com/reblog/176943506187/H8Sa1Nev",
  "https://www.tumblr.com/reblog/176943496672/9Rvvnhid",
  "https://www.tumblr.com/reblog/176943531207/jYtQ5kz2",
  "https://www.tumblr.com/reblog/176943530652/inQQhWVh",
  "https://www.tumblr.com/reblog/176943530162/P9X9ASVi",
  "https://www.tumblr.com/reblog/176943528422/eA5N0i11",
  "https://www.tumblr.com/reblog/176943516697/DlJGu2KU",
  "https://www.tumblr.com/reblog/176943619872/lSzmmyQG",
  "https://www.tumblr.com/reblog/176943614372/9WnwBsPZ",
  "https://www.tumblr.com/reblog/176943612147/rw4P4S8p",
  "https://www.tumblr.com/reblog/176943609497/MLl37zKS",
  "https://www.tumblr.com/reblog/176943607312/cgd3cxc4",
  "https://www.tumblr.com/reblog/176943634182/Qopbb97c",
  "https://www.tumblr.com/reblog/176943631907/c9V0rrNp",
  "https://www.tumblr.com/reblog/176943627472/d0kUPdbK",
  "https://www.tumblr.com/reblog/176943624537/RMxQPgeM",
  "https://www.tumblr.com/reblog/176943622627/oyUWH1k6",
  "https://www.tumblr.com/reblog/176943809027/0Kk7FSN2",
  "https://www.tumblr.com/reblog/176943806767/YiIYvmyw",
  "https://www.tumblr.com/reblog/176943804587/cgd3cxc4",
  "https://www.tumblr.com/reblog/176943802507/uYzFmr1z",
  "https://www.tumblr.com/reblog/176943800332/RW6hl3AW",
  "https://www.tumblr.com/reblog/176943827052/lSZ93vqu",
  "https://www.tumblr.com/reblog/176943820382/ZVgau6x2",
  "https://www.tumblr.com/reblog/176943817417/kNKLGkK8",
  "https://www.tumblr.com/reblog/176943813867/29XSuFk6",
  "https://www.tumblr.com/reblog/176943811582/RaeyBt7E",
  "https://www.tumblr.com/reblog/176943846207/6E2Xs64O",
  "https://www.tumblr.com/reblog/176943843937/fATLOVnQ",
  "https://www.tumblr.com/reblog/176943840532/7JywDVxp",
  "https://www.tumblr.com/reblog/176943837147/WVkBgd6M",
  "https://www.tumblr.com/reblog/176943831352/WOGeiOTJ",

            ]
            var urlz = "https://www.tumblr.com/reblog/176258039384/q0n3w6v8";

            for(var i=0;i< 35;i++)
            {
              var roba= dembtns[i].split("reblog/")[1];
              //console.log("i= "+ i +"\t"+($("img").eq(i).attr("src")));
              var item = { "id" : dembtns[i].split("reblog/")[1].split("/")[0],
                            "reblogKey" : dembtns[i].split("reblog/")[1].split("/")[1],
                           "tags" : "chic, tee, tshirt, fashion, deal, clothes, hoodie"};
              myObj["posts"].push(item);
              var temp = myObj["posts"];
                console.log("Posted: \t" + temp[i].id);


                clientMemes.reblogPost("memesforages.tumblr.com", params = { "id": temp[i].id,
                                                                              "state": "queue",
                                                                              "reblog_key": temp[i].reblogKey,
                                                                              "tags":  temp[i].tags
                                                                            } ,
                                      function(err, data){

                                        console.log("Posted: \n");
                                      })


            }
            /*
            clientMemes.reblogPost("memesforages.tumblr.com", params = { "id": myObj["posts"][0].id,
                                                                          "reblog_key": myObj["posts"][0].reblogKey,
                                                                          "tags":  myObj["posts"][0].tags
                                                                        } ,
                                  function(err, data){
                                    console.log("Posted: \t" + myObj["posts"][0].id);
                                  });
                                  */
            res.send(myObj);



                })
                .catch((err) => {
                  console.log(err);
                });
            });

// app.use(function(req, res) {
//   res.status(400);
//   res.send({ error: "400", title: "404: File Not Found" });
// });
app.get("/tumblrQueue/", function(req, res) {
  //Storing data:
    myObj = {};
    myJSON = JSON.stringify(myObj);
    myObj["posts"] = [];
    var tumblr = require('tumblr.js');

    var clientMemes = tumblr.createClient({
        consumer_key: 'gn1tWsZ5Wq3tyOdZbKoOLHrUhlYwAnXqDjEeLRtwjGuCu1LKh2',
        consumer_secret: 'vcIKu8qrHl8uguTgjkbGuwaQiVDajMfY3zi1u7AJXcUzlDVxiU',
        token: 'dC00e6YQxlwWT37Lm8A8ZIx1VpwHoVcTbCAHlinpptluI6R8YT',
        token_secret: '6gMoqbosWaQCfK1c56CPvCNmMyyFtZkZjKrDuUDNig4Bd10Vsw'
        });

  const options = {
    uri: "https://imgur.com/search/score/day?q=memes&qs=thumbs",
    transform: function (body) {
      return cheerio.load(body);
    }
  };
  rp(options)
    .then(($) => {
      var megaDiv= $('.cards');
      for(var i=0;i< 60;i++)
      {
        var listaUrl= ($("img").eq(i).attr("src"));
        //console.log("i= "+ i +"\t"+($("img").eq(i).attr("src")));
        var item = { "url" : ($("img").eq(i).attr("src")),
                      "title" : ($("p").eq(i).text()),
                     "tags" : "meme funny, funny picture, dank meme, funny"};
        myObj["posts"].push(item);

        clientMemes.createPost("memesforages.tumblr.com", params = { "type": "photo",
                                                                      "state": "queue",
                                                                    "caption": myObj["posts"][i].title,
                                                                   "source": myObj["posts"][i].url.replace("b.jpg", ".jpg"),
                                                                   "tags" : myObj["posts"][i].tags} ,
                              function(err, data){
                                console.log("Posted: \t" + myObj["posts"][i].title);
                              });
                                                                   ;

      }
      res.send(myObj);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/tumblrAwwQueue/", function(req, res) {
  //Storing data:
    myObj = {};
    myJSON = JSON.stringify(myObj);
    myObj["posts"] = [];
    var tumblr = require('tumblr.js');

    var clientMemes = tumblr.createClient({
        consumer_key: 'fIJI5esiBwbsttsdd6QhPSB4GvNXMlwzkSAq43efSH8ri9cpQ9',
        consumer_secret: 'Z4ce5s0NCGsvBOYcW5TrLKYkrDjt0Qodd6XHBzuvnzA0PolBXi',
        token: 'i0YJqjj5plA4GN906vuirucDdLFO1uief2jKPbDVQAB6oiwzFd',
        token_secret: '4uqPSXZHaz15WuSK03lETB8QLUhqf9LvqZhjvetwIKPNSRXG0D'
        });

  const options = {
    uri: "https://imgur.com/search/score/day?q=aww&qs=thumbs",
    transform: function (body) {
      return cheerio.load(body);
    }
  };
  rp(options)
    .then(($) => {
      var megaDiv= $('.cards');
      for(var i=0;i< 60;i++)
      {
        var listaUrl= ($("img").eq(i).attr("src"));
        //console.log("i= "+ i +"\t"+($("img").eq(i).attr("src")));
        var item = { "url" : ($("img").eq(i).attr("src")),
                      "title" : ($("p").eq(i).text()),
                     "tags" : "aww, adorable, cute, funny"};
        myObj["posts"].push(item);

        clientMemes.createPost("awwsfordays.tumblr.com", params = { "type": "photo",
                                                                      "state": "queue",
                                                                    "caption": myObj["posts"][i].title,
                                                                   "source": myObj["posts"][i].url.replace("b.jpg", ".jpg"),
                                                                   "tags" : myObj["posts"][i].tags} ,
                              function(err, data){
                                console.log("Posted: \t" + data);
                              });
                                                                   ;

      }
      res.send(myObj);
    })
    .catch((err) => {
      console.log(err);
    });
});

function scrivi (img){
  var Jimp = require('jimp');
  Jimp.loadFont("Another Danger - Demo.otf").then(function(font) {
    img.print(
        font,
        100,
        100,
        {
            text: 'Hello world!',
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
        },
        1350,
        1750
    ); // prints 'Hello world!' on an image, middle and center-aligned
});

}
app.get("/East", function(req, res) {
  var gm = require("gm");
  gm("xd.JPEG")
    .region(100, 100, 50, 50)
    .gravity('Center')
    .fill("white")
    .fontSize(14)
    .font("Vega Style Personal Use.ttf")
    .drawText(0, 0, 'This text will be centered inside the region')

  res.send("Posted an image brosky");
});




app.get("/IG/:id", function(req, res) {
  const Instagram = require('instagram-web-api');
  const FileCookieStore = require('tough-cookie-filestore2')

  const { username, password } = process.env;

  const cookieStore = new FileCookieStore('cookies.json')
  const client = new Instagram({ username:"unsaid.citations", password:"verdesmeraldo", cookieStore });
  //console.log(client);

  (async () => {
    try {
            console.log("Provo madonna vacca");
            await client.login()
            .then(() => {
                  client
                      .getProfile()
                          .then( (data)=>{
                            console.log(data);
                            console.log("LOLL");
                            const photo = 'https://thumbs.dreamstime.com/z/hi-there-lettering-handwritten-brush-calligraphy-text-speech-bubble-vector-illustration-white-isolated-background-99277127.jpg'
                                client
                                    .uploadPhoto({ photo, caption: 'Hola!' })
                                          .then(console.log("we fuckin did it man"))
                          })
                          })
            } catch (e) {

                console.log(e.message)

                if (e.message.includes('checkpoint_required')) {
                    //send challengeId for UI change to be handled in login
                    const errorObj = JSON.parse(e.message.replace('400 - ', ''))
                    console.log(errorObj);
                    const challenge = await client.getChallenge({ challengeUrl: errorObj.checkpoint_url })
                    console.log(challenge)
                    const challengeUrl = errorObj.checkpoint_url.toString()
                    await client.updateChallenge({ challengeUrl, choice: 0 })
                    await client.updateChallenge({ challengeUrl, securityCode: 386204  })

                    //console.log(wtfHappened);

                  }
                  //await client.login()
                }}) ()
(async () => {
                try {
                        console.log("Provo a postare la foto");
                        await client.login()
                        .then(() => {
                          const photo = 'https://thumbs.dreamstime.com/z/hi-there-lettering-handwritten-brush-calligraphy-text-speech-bubble-vector-illustration-white-isolated-background-99277127.jpg'
                              client
                                  .uploadPhoto({ photo, caption: 'Hola!' })
                                        .then(console.log("we fuckin did it man"))


                                      })
                        } catch (e) {

                            console.log(e.message)
                  }})()

  res.send("Posted an image brosky")
});

app.set("port", serverPort);


/* Start the server on port 3000 */
app.listen(serverPort, function() {
  console.log(`Your app is ready at port ${serverPort}`);
});
