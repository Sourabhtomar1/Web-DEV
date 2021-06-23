let request = require("request");
let fs = require("fs")
let cheerio = require("cheerio");

const getmatch = require("./match")


function getAllMatches(link) {
  request(link, callback)
}



function callback(error , response , html) {

  if(error == null && response.statusCode == 200){
    parseData(html);
  }else if(response.statusCode == 404){
    console.log("Page not found");
  }else{
    console.log(error);
  }

}

function parseData(html) {
  let ch = cheerio.load(html);

  let allAtag = ch('a[data-hover="Scorecard"]');

  //[match 1 , match2 .... match48]
  console.log(allAtag.length);

  for(let url =0;url<allAtag.length;url++){

      let link = ch(allAtag[url]).attr("href");
      let completeLink = "https://www.espncricinfo.com"+link;
      // console.log(completeLink);
      getmatch(completeLink);
  }

  // le
}

module.exports = getAllMatches;
