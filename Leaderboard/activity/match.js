
// link :- https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/england-vs-australia-2nd-semi-final-1144529/full-scorecard
let request = require("request");
let fs = require("fs")
let cheerio = require("cheerio");

// let link = "https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/england-vs-australia-2nd-semi-final-1144529/full-scorecard"

let leaderBoard =[];

let cnt =0;

function getmatch(link) {
  // console.log("SEnding"+cnt);
  cnt++;
  request(link,callback);
}


function callback(error , response , html) {

  if(error == null && response.statusCode == 200){
    //console.log("Recieving"+cnt);
    cnt--;
    if(cnt == 0){
      console.table(leaderBoard);
    }
    parseData(html);
  }else if(response.statusCode == 404){
    console.log("Page not found");
  }else{
    console.log(error);
  }

}

function parseData(html) {
  let ch = cheerio.load(html);

  let bothInnings = ch(".card.content-block.match-scorecard-table .Collapsible");

  for(let i =0;i<bothInnings.length;i++){
    let teamName = ch(bothInnings[i]).find("h5").text();
    teamName = teamName.split("INNINGS")[0].trim();

    if(!teamName.includes("Team")){
      let allTrs = ch(bothInnings[i]).find(".table.batsman tbody tr");
      //<tr> ..</tr>
      // console.log(teamName);
      for(let j=0;j<allTrs.length-1;j++){
        let alltds = ch(allTrs[j]).find("td");
        if(alltds.length>1){
          let batsmanName = ch(alltds[0]).find("a").text().trim();
          let runs = ch(alltds[2]).text().trim();
          let balls = ch(alltds[3]).text().trim();
          let fours = ch(alltds[5]).text().trim();
          let sixes = ch(alltds[6]).text().trim();
          let strikerate = ch(alltds[7]).text().trim();
           // console.log(`Batsman = ${batsmanName} runs =${runs} balls = ${balls} fours =${fours} sixes=${sixes} strikerate=${strikerate}`);
          createLearderBoard(teamName,batsmanName,runs,balls,fours,sixes,strikerate);
        }
      }
    }

    // console.log("-------------------");
  }

  // let bothInningslen = bothInnings.length;

  // console.log(bothInningslen);

  // fs.writeFileSync("./scorecard.html",bothInnings);
  // console.log(html);
}




function createLearderBoard(teamName,batsmanName,runs,balls,fours,sixes,strikerate) {
  runs = Number(runs);
  balls = Number(balls);
  fours = Number(fours);
  sixes = Number(sixes);

  for(let i =0;i<leaderBoard.length;i++){
    if(leaderBoard[i].Batsman == batsmanName && leaderBoard[i].Team == teamName){
      leaderBoard[i].Runs +=runs;
      leaderBoard[i].Balls +=balls;
      leaderBoard[i].Fours += fours;
      leaderBoard[i].Sixes += sixes;
      return;
    }
  }

  let entry = {
    Team : teamName,
    Batsman : batsmanName,
    Runs : runs,
    Balls : balls,
    Fours : fours,
    Sixes : sixes,

  }
  leaderBoard.push(entry);
}

module.exports = getmatch;
