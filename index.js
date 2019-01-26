const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlDbFactory = require("knex");
const process = require("process");
const path = require('path');
const rp = require('request-promise');
const cheerio = require('cheerio');
const _ = require("lodash");
const twilio = require('twilio');




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

"https://www.tumblr.com/reblog/180302117119/IDnpCxXm",
"https://www.tumblr.com/reblog/180302105614/A6sX6jvX",
"https://www.tumblr.com/reblog/180302102614/df9VVwUy",
"https://www.tumblr.com/reblog/180302098804/OLjeMYGW",
"https://www.tumblr.com/reblog/180302093904/FcmA0K9N",
"https://www.tumblr.com/reblog/180302148999/8glDGvjP",
"https://www.tumblr.com/reblog/180302144699/VbwSq3vv",
"https://www.tumblr.com/reblog/180302140324/rSrTGJcC",
"https://www.tumblr.com/reblog/180302134494/IJLCnKjy",
"https://www.tumblr.com/reblog/180302130854/KBxRqUSb",
"https://www.tumblr.com/reblog/180302206304/6CrwW2jO",
"https://www.tumblr.com/reblog/180302201694/OA39zzfe",
"https://www.tumblr.com/reblog/180302195239/cLEF5WUB",
"https://www.tumblr.com/reblog/180302190079/HcRwrp5V",
"https://www.tumblr.com/reblog/180302174009/1uA3xDbA",
"https://www.tumblr.com/reblog/180302523349/L1wqkxfB",
"https://www.tumblr.com/reblog/180302374614/l0FtOnmE",
"https://www.tumblr.com/reblog/180302369264/aP1uEnvI",
"https://www.tumblr.com/reblog/180302363169/xm0heO6y",
"https://www.tumblr.com/reblog/180302358614/f1qGnKtj",
"https://www.tumblr.com/reblog/180302417069/d0xF8N5h",
"https://www.tumblr.com/reblog/180302411129/lR0RPPKB",
"https://www.tumblr.com/reblog/180302400164/gYmGXhfO",
"https://www.tumblr.com/reblog/180302395164/EQgiQNIb",
"https://www.tumblr.com/reblog/180302387104/eQqLOPRK",
"https://www.tumblr.com/reblog/180302554714/uesTw6R5",
"https://www.tumblr.com/reblog/180302549489/gh5TqQPg",
"https://www.tumblr.com/reblog/180302541744/cYywVgbX",
"https://www.tumblr.com/reblog/180302535989/Y4oCsbPN",
"https://www.tumblr.com/reblog/180302529269/1nnM6ZgN",
"https://www.tumblr.com/reblog/180302586899/2d9eyf2S",
"https://www.tumblr.com/reblog/180302582184/kP2FvCcp",
"https://www.tumblr.com/reblog/180302578179/9qgFMxiA",
"https://www.tumblr.com/reblog/180302575124/Y6aiefr2",
"https://www.tumblr.com/reblog/180302569044/hTaO9U0X"


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

    var clientMemes =  tumblr.createClient({
  consumer_key: 'aFqcfXO4lL85ox1j3kXqgHGIpje7QgSGMzA50aKdQBb18FUqWP',
  consumer_secret: '93Sgl6llc6nUgPhsngqSMq2tE3f4r2CCthLXsLoTitLsVwrksn',
  token: 'hClA3CZTHIgtH9gp5n60ekTe6li1tihSOcgjKzjF3BuJN8dDYq',
  token_secret: 'FkPA3IE056JvFkT0dTlYjDOZTtBFIR0Tn0CHH0OBsvg48vbZqX'
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

function scrivi (corpoQuote, Author, num){
  var Jimp = require('jimp');
  Jimp.read("cool.jpg")
  .then( img => {
    Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(function(font) {
      img.print(
          font,
          120,
          10,
          {
              text : corpoQuote+ " -"+ Author,
              alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
              alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
          },
          1750,
          1415
      );
      img.write("dIoCanaglia"+ num.toString()+ ".jpg"); //salvo la quote
  });


  })
}

function OverriteThatCookie()
{
  fs = require('fs')
  fs.writeFile("cookies.json", "{\"www.instagram.com\" : {\"/\" : {\" \" : {\"hostOnly \":true,\"domain\" : \"www.instagram.com\",\"value\" : \"ig_cb=1\",\"pathIsDefault\" : true,\"path\" : \"/\"}}}}"
              ,(err) => {
  if (err) throw err;
  console.log('The cookie has been restored to his original state!');
})

}
function PostaInstagram(Caption, i)
{
  const Instagram = require('instagram-web-api');
  const FileCookieStore = require('tough-cookie-filestore2')
  const { username, password } = process.env;
  const cookieStore = new FileCookieStore('cookies.json')
  const client = new Instagram({ username:"unsaid.citations", password:"verdesmeraldo", cookieStore });
  const photo = 'dIoCanaglia'+ i.toString()+'.jpg';
  (async () => {
    try {
            console.log("PostaInstagram--- Logging now:");
            await client.login()
            .then(() => {
              console.log("PostaInstagram--- GettingTheProfile:");
                  client.getProfile()
                          .then( ()=>{
                            console.log("^ Get Profile ha workato!");
                            (async () => {
                               await client.uploadPhoto({ photo, caption: Caption })
                                   console.log("we fuckin did it man, #photoUploaded! tempo di commentare");
                                   const test = await client.getUserByUsername({ username: 'unsaid.citations' });
                                   const media = await client.getMediaByShortcode({ shortcode: test.edge_owner_to_timeline_media.edges[0].node.shortcode });
                                   console.log(media);
                                     await client.addComment({ mediaId: media.id, text: '#quote #like4like #l4l #instaquote #inspirationalquotes #life #quotestoliveby #quotesaboutlife #instagramquote #positive #amen #cit #words #mindset #love #facts #passion #sayings #lovequotes #quoteoftheday #relatable #accurate #instagood #' + Caption.split("-- ")[1].replace(" ", "")})
                                     .then(() =>{
                                       console.log("Orcamadonna se ho commentato");
                                     })
                                     .catch(e => {console.log(e);})
                                   })();
                                 })
                                 .catch( e => {console.log("Fuck me in the ass, from getting the profile");})
                               })
            } catch (e) {
                console.log("Erroe nel login or profile boh:")
                console.log(e.message)


                if (e.message.includes('checkpoint_required')) {
                    //send challengeId for UI change to be handled in login
                    const errorObj = JSON.parse(e.message.replace('400 - ', ''))
                    console.log(errorObj);
                    console.log("FINECAZZOERRORE\n\n");
                    const challenge = await client.getChallenge({ challengeUrl: errorObj.checkpoint_url });
                    console.log(challenge);
                    console.log("END of the challenge\n\n");
                    const challengeUrl = errorObj.checkpoint_url.toString();
                    await client.updateChallenge({ challengeUrl, choice: 0 });
                    await client.updateChallenge({ challengeUrl, securityCode: 074982  })
                    await client.updateChallenge({ challengeUrl, securityCode: 074982  })
                    .catch((err) => {console.log(err)})
                  }
                }})();
}
app.get("/GenerateQuotes/:id", function(req, res) {
  var ID = parseInt(req.params.id);

    myObj = {};
    myJSON = JSON.stringify(myObj);
    myObj["posts"] = [];

  const options = {
    uri: 'https://www.brainyquote.com/quote_of_the_day',
    transform: function (body) {
      return cheerio.load(body);
    }
  };
  rp(options)
    .then(($) => {
      for(var i =0; i<5;i++)
      {
      var item = { "Quote" : ($(".b-qt").eq(i).text()),
                    "Autore" : ($(".bq-aut").eq(i).text())
                  }

      myObj["posts"].push(item);
      scrivi(myObj["posts"][i].Quote,myObj["posts"][i].Autore, i);
      }
      console.log("Vediamo se worka il posting:\n");
      PostaInstagram(myObj["posts"][ID].Quote + " -- " + myObj["posts"][ID].Autore, ID);
      res.send(myObj);
    })

});




app.get("/IG/:id", function(req, res) {
  var ID = req.params.id;
  res.send("TO DO endpoint che non fa nulla per ora")
});

app.get("/sms", function(req, res) {
  console.log("Getting SMS!");
  var obj= {};
  obj["mex"]= [];
  const accountSid = 'ACb7e79addebe7b6920a6b8b5a1ae84901';
  const authToken = '4443fdb1a17e97d9909323d188bcc308';
  const client = require('twilio')(accountSid, authToken);
client.messages.each(messages => {
  console.log(messages.body)
  //obj["mex"].push(obj.mexTxt = messages.body)
  //res.send(obj)
});
  });


app.post("/sms", function (request, response) {
  console.log("POSTING SMS!");
  let splits = request.body.Body.split(" ");
  console.log(request.body.Body);
  let numerino = splits[1].toString().join(splits[2].toString());
  console.log(numerino);

  let fs = require('fs');
  fs.writeFile("Madonnina.txt", numerino,(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
  response.send('Done by melone');
});

app.get("/Showcookie/", function(req, res) {
  res.contentType('json');
  res.sendFile(path.join(__dirname , '/cookies.json'));
});

app.get("/cookie/", function(req, res) {
  OverriteThatCookie();
  res.send("cookie refreshed è.è")
});

app.get("/code/:id", function(req, res) {
  var ID = req.params.id;

  res.send("I did it");
});

app.set("port", serverPort);


/* Start the server on port 3000 */
app.listen(serverPort, function() {
  console.log(`Your app is ready at port ${serverPort}`);
});
