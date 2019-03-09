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
var reddit = require('redditor');





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






app.get("/reddit", function (req, res){


  myObj = {};
  myObj['posts'] = [];
  reddit.get('/r/aww.json', function(err, response) {
      if(err) throw err;
      //console.log(response);
      for( i in response['data']['children'])
      {
        //console.log(response['data']['children'][i.toString()]);
        console.log(response['data']['children'][i.toString()]['data']['title'] +"\t" + response['data']['children'][i.toString()]['data']['url'] +"\n");

        var item = { "url" : response['data']['children'][i.toString()]['data']['url'],
                      "title" : response['data']['children'][i.toString()]['data']['title']}

        myObj["posts"].push(item);
      }
      console.log(myObj);
      res.send(myObj);
      //return myObj;
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

      app.get("/affiliateMarketing", function(req, res) {

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

            var dembtns = [
              "https://www.tumblr.com/reblog/183209241968/uHJdHEws",
 "https://www.tumblr.com/reblog/183209239758/LyP5CYcy",
 "https://www.tumblr.com/reblog/183209237323/Komt0xXG",
 "https://www.tumblr.com/reblog/183209230108/VdvVHIuY",
 "https://www.tumblr.com/reblog/183209224328/drGgsLbC",
 "https://www.tumblr.com/reblog/183209273483/hMKkKWKR",
 "https://www.tumblr.com/reblog/183209258228/UkbFNIMl",
 "https://www.tumblr.com/reblog/183209256048/VxsujPTG",
 "https://www.tumblr.com/reblog/183209248438/iTdHf7ot",
 "https://www.tumblr.com/reblog/183209245778/SnB30OHu",
 "https://www.tumblr.com/reblog/183209269263/54L1vNDz",
 "https://www.tumblr.com/reblog/183209267278/6PCoo2YO",
 "https://www.tumblr.com/reblog/183209264408/imAjrf74",
 "https://www.tumblr.com/reblog/183209262193/YPiXizrW",
 "https://www.tumblr.com/reblog/183209260208/5Xq0Lrc9",
 "https://www.tumblr.com/reblog/183209288498/EuWsXvty",
 "https://www.tumblr.com/reblog/183209286323/20sSjHNX",
 "https://www.tumblr.com/reblog/183209283198/xfJz8CNU",
 "https://www.tumblr.com/reblog/183209281263/KGSL3D6R",
 "https://www.tumblr.com/reblog/183209278428/FlS5s0mW",
 "https://www.tumblr.com/reblog/183209297938/mmlSzPhw",
 "https://www.tumblr.com/reblog/183209295958/FZKcS3kz",
 "https://www.tumblr.com/reblog/183209294293/isQxM3ZQ",
 "https://www.tumblr.com/reblog/183209292408/6maTGp4t",
 "https://www.tumblr.com/reblog/183209290403/AfFfpINt",
 "https://www.tumblr.com/reblog/183209308273/hoMS7aXq",
 "https://www.tumblr.com/reblog/183209305883/pAJqPlY2",
 "https://www.tumblr.com/reblog/183209303773/aH3tcAbp",
 "https://www.tumblr.com/reblog/183209301878/EGPMlaxk",
 "https://www.tumblr.com/reblog/183209299873/qYyBKCR0",
 "https://www.tumblr.com/reblog/183209322108/TRQRjW24",
 "https://www.tumblr.com/reblog/183209319493/JqGyBxVr",
 "https://www.tumblr.com/reblog/183209316853/CaQakPOT",
 "https://www.tumblr.com/reblog/183209313773/GdVYA6Nd",
 "https://www.tumblr.com/reblog/183209311163/i5wmBtJN",

            ]



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



app.get("/Testing", function(req, res) {


  const options = {
    uri: "https://www.reddit.com/r/ProgrammerHumor/top/?t=day",
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  rp(options)
    .then(($) => {
      var megaDiv= $(".scrollerItem").eq(3);
      console.log(megaDiv.html());


      console.log("\n\n\n\n\nEND MEGa\n");

      var post= $(".s1okktje-1");
      var postLink= $(".s1okktje-1 > span > a")


      for(var i=0; i<6;i++)

        console.log(postLink.eq(i).attr('href')+ "\t"); // <--- works
        console.log(post.eq(i).text()+ "\n");
        console.log(post.eq(i).html());
    });


    res.send("GGWP");
});





app.get("/tumblrAwwRedditQueue", function(req, res) {
  var tumblr = require('tumblr.js');
  var clientMemes = tumblr.createClient({
      consumer_key: 'fIJI5esiBwbsttsdd6QhPSB4GvNXMlwzkSAq43efSH8ri9cpQ9',
      consumer_secret: 'Z4ce5s0NCGsvBOYcW5TrLKYkrDjt0Qodd6XHBzuvnzA0PolBXi',
      token: 'i0YJqjj5plA4GN906vuirucDdLFO1uief2jKPbDVQAB6oiwzFd',
      token_secret: '4uqPSXZHaz15WuSK03lETB8QLUhqf9LvqZhjvetwIKPNSRXG0D'});

      myObj = {};
      myJSON = JSON.stringify(myObj);
      myObj["posts"] = [];
      reddit.get('/r/aww.json', function(err, response) {
          if(err) throw err;
          //console.log(response);
          for( i in response['data']['children'])
          {
            //console.log(response['data']['children'][i.toString()]);
            //console.log(response['data']['children'][i.toString()]['data']['title'] +"\t" + response['data']['children'][i.toString()]['data']['url'] +"\n");

            var item = { "url" : response['data']['children'][i.toString()]['data']['url'],
                          "title" : response['data']['children'][i.toString()]['data']['title'],
                        "tags" : "aww, cute, adorable, awww"}

            myObj["posts"].push(item);
          }

        for(var i=2; i<26; i++)
        {

          clientMemes.createPost("awwsfordays.tumblr.com", params = { "type": "photo",
                                                                        "state": "queue",
                                                                      "caption": myObj["posts"][i].title,
                                                                     "source": myObj["posts"][i].url,
                                                                     "tags" : myObj["posts"][i].tags} ,
                                function(err, data){
                                  //console.log("Posted: \t" + myObj["posts"][i].title);
                                });
        }
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
